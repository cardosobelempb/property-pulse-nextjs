import { GET as getById } from "./get-category-by-id.handler";
import { PUT as update } from "./update-category.handler";
import { DELETE as remove } from "./delete-category.handler";

export { getById as GET, update as PUT, remove as DELETE };
