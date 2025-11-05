import { PrismaClient } from "@/app/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed...");

  // === 1️ Usuários (owners) ===
  const users = await prisma.user.createMany({
    data: [
      {
        id: "11111111-1111-1111-1111-111111111111",
        name: "John Doe",
        email: "john@gmail.com",
        password: "hashed_password_1",
        phone: "617-555-5555",
      },
      {
        id: "22222222-2222-2222-2222-222222222222",
        name: "David Johnson",
        email: "david@gmail.com",
        password: "hashed_password_2",
        phone: "213-555-5555",
      },
      {
        id: "33333333-3333-3333-3333-333333333333",
        name: "Michael Brown",
        email: "michael@gmail.com",
        password: "hashed_password_3",
        phone: "312-555-5555",
      },
      {
        id: "44444444-4444-4444-4444-444444444444",
        name: "Robert Anderson",
        email: "robert@gmail.com",
        password: "hashed_password_4",
        phone: "303-555-5555",
      },
      {
        id: "55555555-5555-5555-5555-555555555555",
        name: "Jennifer Martin",
        email: "jennifer@gmail.com",
        password: "hashed_password_5",
        phone: "970-555-5555",
      },
      {
        id: "66666666-6666-6666-6666-666666666666",
        name: "Lisa Taylor",
        email: "lisa@gmail.com",
        password: "hashed_password_6",
        phone: "303-555-5555",
      },
      {
        id: "77777777-7777-7777-7777-777777777777",
        name: "Matthew Harris",
        email: "matthew@gmail.com",
        password: "hashed_password_7",
        phone: "215-555-5555",
      },
    ],
    skipDuplicates: true,
  });

  // === 2️ Função auxiliar para criar propriedade completa ===
  const createProperty = async (data: any) => {
    const location = await prisma.location.create({
      data: {
        street: data.location.street,
        city: data.location.city,
        state: data.location.state,
        zipcode: data.location.zipcode,
      },
    });

    const rate = await prisma.rate.create({
      data: {
        weekly: data.rates.weekly ?? 0,
        monthly: data.rates.monthly ?? 0,
        nightly: data.rates.nightly ?? 0,
      },
    });

    await prisma.property.create({
      data: {
        owner: data.userId,
        name: data.name,
        type: data.type,
        description: data.description,
        locationId: location.id,
        beds: data.beds,
        baths: data.baths,
        squareFeet: data.square_feet,
        amenities: data.amenities,
        rateId: rate.id,
        userId: userIdMap[data.userId],
        images: data.images,
        isFeatured: data.is_featured,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
      },
    });
  };

  // === 3️ Mapeamento owner → userId ===
  const userIdMap: Record<string, string> = {
    "1": "11111111-1111-1111-1111-111111111111",
    "2": "22222222-2222-2222-2222-222222222222",
    "3": "33333333-3333-3333-3333-333333333333",
    "4": "44444444-4444-4444-4444-444444444444",
    "5": "55555555-5555-5555-5555-555555555555",
    "6": "66666666-6666-6666-6666-666666666666",
    "7": "77777777-7777-7777-7777-777777777777",
  };

  // === 4️ Propriedades (dados resumidos) ===
  const properties = [
    {
      userId: "11111111-1111-1111-1111-111111111111",
      name: "Boston Commons Retreat",
      type: "Apartment",
      description:
        "This is a beautiful apartment located near the commons. It is a 2 bedroom apartment with a full kitchen and bathroom. It is available for weekly or monthly rentals.",
      location: {
        street: "120 Tremont Street",
        city: "Boston",
        state: "MA",
        zipcode: "02108",
      },
      beds: 2,
      baths: 1,
      square_feet: 1500,
      amenities: [
        "Wifi",
        "Full kitchen",
        "Washer & Dryer",
        "Free Parking",
        "Hot Tub",
        "24/7 Security",
        "Wheelchair Accessible",
        "Elevator Access",
        "Dishwasher",
        "Gym/Fitness Center",
        "Air Conditioning",
        "Balcony/Patio",
        "Smart TV",
        "Coffee Maker",
      ],
      rates: { weekly: 1100, monthly: 4200 },
      images: ["a1.jpg", "a2.jpg", "a3.jpg"],
      is_featured: false,
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
    },
    {
      userId: "11111111-1111-1111-1111-111111111111",
      name: "Cozy Downtown Loft",
      type: "Apartment",
      description: "A cozy downtown loft with great city views.",
      location: {
        street: "45 Main Street",
        city: "New York",
        state: "NY",
        zipcode: "10001",
      },
      beds: 1,
      baths: 1,
      square_feet: 1800,
      amenities: [
        "Wifi",
        "Full kitchen",
        "Washer & Dryer",
        "Free Parking",
        "Hot Tub",
        "24/7 Security",
        "Wheelchair Accessible",
        "Elevator Access",
        "Dishwasher",
        "High-Speed Internet",
        "Air Conditioning",
        "Smart TV",
        "Outdoor Grill/BBQ",
      ],
      rates: { weekly: 1000, monthly: 4000 },
      images: ["b1.jpg", "b2.jpg", "b3.jpg"],
      is_featured: false,
      createdAt: "2024-01-02T00:00:00.000Z",
      updatedAt: "2024-01-02T00:00:00.000Z",
    },
    {
      userId: "22222222-2222-2222-2222-222222222222",
      name: "Luxury Condo with a View",
      type: "Condo",
      description:
        "Experience luxury in this stunning condo with breathtaking views.",
      location: {
        street: "500 Lux Lane",
        city: "Los Angeles",
        state: "CA",
        zipcode: "90001",
      },
      beds: 3,
      baths: 2,
      square_feet: 2200,
      amenities: [
        "Wifi",
        "Full kitchen",
        "Washer & Dryer",
        "Free Parking",
        "Hot Tub",
        "24/7 Security",
        "Wheelchair Accessible",
        "Elevator Access",
        "Dishwasher",
        "Swimming Pool",
        "Gym/Fitness Center",
        "Air Conditioning",
        "Smart TV",
        "Coffee Maker",
      ],
      rates: { nightly: 200, weekly: 750, monthly: 3300 },
      images: ["c1.jpg", "c2.jpg", "c3.jpg"],
      is_featured: false,
      createdAt: "2024-01-03T00:00:00.000Z",
      updatedAt: "2024-01-03T00:00:00.000Z",
    },
    // (adicione as demais aqui igual ao JSON original)
  ];

  // === 5️ Inserir propriedades ===
  for (const property of properties) {
    await createProperty(property);
  }

  console.log("✅ Seed completo!");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
