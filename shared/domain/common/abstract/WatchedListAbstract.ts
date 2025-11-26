// Classe abstrata que rastreia mudanças (itens adicionados, removidos e estado atual)
export abstract class WatchedListAbstract<T> {
  // Estado atual da lista
  protected currentItems: T[];

  // Estado inicial registrado no momento da criação
  private readonly initialItems: T[];

  // Itens adicionados depois do estado inicial
  private added: T[];

  // Itens removidos depois do estado inicial
  private removed: T[];

  constructor(initial?: T[]) {
    this.currentItems = initial ?? [];
    this.initialItems = initial ?? [];
    this.added = [];
    this.removed = [];
  }

  // Método abstrato para comparar itens —
  // usado para permitir regras customizadas (ex: comparar IDs)
  abstract compareItems(a: T, b: T): boolean;

  // -------------------------------
  // Getters públicos
  // -------------------------------
  public getItems(): T[] {
    return this.currentItems;
  }

  public getNewItems(): T[] {
    return this.added;
  }

  public getRemovedItems(): T[] {
    return this.removed;
  }

  // -------------------------------
  // Helpers privados reutilizáveis
  // -------------------------------

  /** Verifica se o array contém um item usando compareItems */
  private contains(list: T[], item: T): boolean {
    return list.some((v) => this.compareItems(item, v));
  }

  /** Remove item de um array baseado em compareItems */
  private removeFrom(list: T[], item: T): T[] {
    return list.filter((v) => !this.compareItems(item, v));
  }

  // -------------------------------
  // Consultas
  // -------------------------------

  public exists(item: T): boolean {
    return this.contains(this.currentItems, item);
  }

  private wasInInitial(item: T): boolean {
    return this.contains(this.initialItems, item);
  }

  // -------------------------------
  // Mutação
  // -------------------------------

  /** Adiciona item com rastreamento de mudanças */
  public add(item: T): void {
    // Se já tinha sido removido, desfaz a remoção
    if (this.contains(this.removed, item)) {
      this.removed = this.removeFrom(this.removed, item);
    }

    // Registra como novo item se não existia antes
    if (!this.contains(this.added, item) && !this.wasInInitial(item)) {
      this.added.push(item);
    }

    // Garante que estará na lista atual
    if (!this.contains(this.currentItems, item)) {
      this.currentItems.push(item);
    }
  }

  /** Remove item com rastreamento de mudanças */
  public remove(item: T): void {
    // Remove da lista atual
    this.currentItems = this.removeFrom(this.currentItems, item);

    // Se era novo, basta desfazer o "add"
    if (this.contains(this.added, item)) {
      this.added = this.removeFrom(this.added, item);
      return;
    }

    // Se já estava marcado como removido, ignora
    if (!this.contains(this.removed, item)) {
      this.removed.push(item);
    }
  }

  /** Atualiza completamente estado, recalculando novos e removidos */
  public update(items: T[]): void {
    const newItems = items.filter((a) => !this.contains(this.currentItems, a));
    const removedItems = this.currentItems.filter(
      (a) => !this.contains(items, a)
    );

    this.currentItems = items;
    this.added = newItems;
    this.removed = removedItems;
  }
}
