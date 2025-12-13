-- ============================================
-- 🌱 SEED SQL para PostgreSQL
-- Baseado no schema atualizado do Prisma
-- ============================================

-- 1️⃣ USERS
INSERT INTO
    "user" (
        first_name,
        last_name,
        email,
        password,
        phone,
        role
    )
VALUES (
        'John',
        'Doe',
        'john@gmail.com',
        'hashed_password_1',
        '617-555-5555',
        1
    ),
    (
        'David',
        'Johnson',
        'david@gmail.com',
        'hashed_password_2',
        '213-555-5555',
        1
    ),
    (
        'Michael',
        'Brown',
        'michael@gmail.com',
        'hashed_password_3',
        '312-555-5555',
        1
    ),
    (
        'Robert',
        'Anderson',
        'robert@gmail.com',
        'hashed_password_4',
        '303-555-5555',
        1
    ),
    (
        'Jennifer',
        'Martin',
        'jennifer@gmail.com',
        'hashed_password_5',
        '970-555-5555',
        1
    ),
    (
        'Lisa',
        'Taylor',
        'lisa@gmail.com',
        'hashed_password_6',
        '303-555-5555',
        1
    ),
    (
        'Matthew',
        'Harris',
        'matthew@gmail.com',
        'hashed_password_7',
        '215-555-5555',
        1
    );

-- 2️⃣ LOCATIONS
INSERT INTO
    "location" (street, city, state, zipcode)
VALUES (
        '120 Tremont Street',
        'Boston',
        'MA',
        '02108'
    ),
    (
        '45 Main Street',
        'New York',
        'NY',
        '10001'
    ),
    (
        '500 Lux Lane',
        'Los Angeles',
        'CA',
        '90001'
    ),
    (
        '123 Countryside Lane',
        'Austin',
        'TX',
        '78701'
    ),
    (
        '75 Urban Avenue',
        'Chicago',
        'IL',
        '60601'
    ),
    (
        '456 Oceanfront Drive',
        'Miami',
        'FL',
        '33101'
    ),
    (
        '789 Forest Lane',
        'Denver',
        'CO',
        '80201'
    ),
    (
        '321 Mountain Road',
        'Aspen',
        'CO',
        '81611'
    ),
    (
        '600 Summit Drive',
        'Boulder',
        'CO',
        '80301'
    ),
    (
        '123 History Lane',
        'Philadelphia',
        'PA',
        '19101'
    );

-- 3️⃣ RATES
INSERT INTO
    "rate" (weekly, monthly, nightly)
VALUES (1100, 4200, 0),
    (1000, 4000, 0),
    (750, 3300, 200),
    (2000, 0, 0),
    (1100, 4200, 0),
    (2500, 0, 500),
    (2000, 0, 475),
    (1100, 0, 300),
    (1000, 3800, 0),
    (550, 2100, 0);

INSERT INTO
    "image" (url, property_id)
VALUES (
        'a1.jpg',
        'de466908-76bb-43b0-af85-de9415b8508a'
    ),
    (
        'a2.jpg',
        'de466908-76bb-43b0-af85-de9415b8508a'
    ),
    (
        'a3.jpg',
        'de466908-76bb-43b0-af85-de9415b8508a'
    ),
    (
        'b1.jpg',
        '52461701-22cc-4828-baa3-84c1a29cac8a'
    ),
    (
        'b2.jpg',
        '52461701-22cc-4828-baa3-84c1a29cac8a'
    ),
    (
        'b3.jpg',
        '52461701-22cc-4828-baa3-84c1a29cac8a'
    ),
    (
        'c1.jpg',
        '38d478a8-86c2-4212-b6d9-396157ac9dff'
    ),
    (
        'c2.jpg',
        '38d478a8-86c2-4212-b6d9-396157ac9dff'
    ),
    (
        'c3.jpg',
        '38d478a8-86c2-4212-b6d9-396157ac9dff'
    ),
    (
        'd1.jpg',
        '2152f3c8-3aae-4f69-b71f-46aeb5cf2359'
    ),
    (
        'd2.jpg',
        '2152f3c8-3aae-4f69-b71f-46aeb5cf2359'
    ),
    (
        'd3.jpg',
        '2152f3c8-3aae-4f69-b71f-46aeb5cf2359'
    ),
    (
        'e1.jpg',
        '019de44e-0d59-4859-87b3-7bb57ae7f66e'
    ),
    (
        'e2.jpg',
        '019de44e-0d59-4859-87b3-7bb57ae7f66e'
    ),
    (
        'e3.jpg',
        '019de44e-0d59-4859-87b3-7bb57ae7f66e'
    ),
    (
        'f1.jpg',
        '5952444d-0b78-4510-a382-78e7a1cafcbf'
    ),
    (
        'f2.jpg',
        '5952444d-0b78-4510-a382-78e7a1cafcbf'
    ),
    (
        'f3.jpg',
        '5952444d-0b78-4510-a382-78e7a1cafcbf'
    ),
    (
        'g1.jpg',
        '00b10806-0f58-41d0-9ebe-ed3ff047f0ca'
    ),
    (
        'g2.jpg',
        '00b10806-0f58-41d0-9ebe-ed3ff047f0ca'
    ),
    (
        'g3.jpg',
        '00b10806-0f58-41d0-9ebe-ed3ff047f0ca'
    ),
    (
        'h1.jpg',
        '2785eab5-51aa-47ea-b3f1-1d0bd1b3b081'
    ),
    (
        'h2.jpg',
        '2785eab5-51aa-47ea-b3f1-1d0bd1b3b081'
    ),
    (
        'h3.jpg',
        '2785eab5-51aa-47ea-b3f1-1d0bd1b3b081'
    ),
    (
        'i1.jpg',
        '133421b7-bd08-4db1-a68c-02720dc5acf9'
    ),
    (
        'i2.jpg',
        '133421b7-bd08-4db1-a68c-02720dc5acf9'
    ),
    (
        'i3.jpg',
        '133421b7-bd08-4db1-a68c-02720dc5acf9'
    ),
    (
        'j1.jpg',
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf'
    ),
    (
        'j2.jpg',
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf'
    ),
    (
        'j3.jpg',
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf'
    ),
    (
        'j4.jpg',
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf'
    );

INSERT INTO
    "amenity" (name)
VALUES ('Wifi'),
    ('Full kitchen'),
    ('Washer & Dryer'),
    ('Free Parking'),
    ('Hot Tub'),
    ('Elevator Access'),
    ('Dishwasher'),
    ('Gym / Fitness Center'),
    ('Air Conditioning'),
    ('Wheelchair Accessible'),
    ('Balcony / Patio'),
    ('Smart TV'),
    ('Coffee Maker'),
    ('Outdoor Grill / BBQ'),
    ('24 / 7 Security'),
    ('High - Speed Internet'),
    ('Cozy Downtown Loft');

-- 4️⃣ PROPERTIES
INSERT INTO
    "property" (
        name,
        type,
        description,
        beds,
        baths,
        square_feet,
        rate_id,
        location_id,
        user_id,
        is_featured
    )
VALUES (
        'Boston Commons Retreat',
        'Apartment',
        'Beautiful 2 bedroom apartment near the commons, available weekly or monthly.',
        2,
        1,
        1500,
        'd6fd8f49-5fca-4d1c-bbd2-f298036684c6',
        'd8af5629-c2b4-4789-813f-1e61439eb96c',
        'd5a513df-f7ef-4601-ad39-c7c30c8ce612',
        FALSE
    ),
    (
        'Cozy Downtown Loft',
        'Apartment',
        'A cozy downtown loft with great city views.',
        1,
        1,
        1800,
        'd6fd8f49-5fca-4d1c-bbd2-f298036684c6',
        '76f7f90f-52b9-4f91-85a2-0397d55a5118',
        '629e435e-ff54-4dcc-922f-25fc76658307',
        FALSE
    ),
    (
        'Luxury Condo with a View',
        'Condo',
        'Experience luxury in this stunning condo with breathtaking views.',
        3,
        2,
        2200,
        'c54d6834-cc2f-413b-9b03-9a1743612716',
        'bc0140e9-50f9-46c9-adba-2b4170f56727',
        '697040b0-dcce-482e-b523-efe4dc6bcb67',
        FALSE
    ),
    (
        'Charming Cottage Getaway',
        'Cottage Or Cabin',
        'Escape to this charming cottage for a peaceful retreat.',
        1,
        1,
        900,
        'c54d6834-cc2f-413b-9b03-9a1743612716',
        '37c8042e-4935-44c7-9e7c-44e7662ca17b',
        'b1843d8c-74e8-4c10-ac3f-1c41e8c434c3',
        FALSE
    ),
    (
        'Modern Downtown Studio',
        'Studio',
        'Stay in style in this modern downtown studio apartment.',
        1,
        1,
        900,
        '2197b389-d4cc-4913-bf2b-57f039519f09',
        '1e9568d3-8ea3-4cae-ab04-2084d07f8b98',
        '3d50beed-9359-4a62-a15e-6599c29df31e',
        TRUE
    ),
    (
        'Seaside Retreat',
        'House',
        'Escape to this seaside house for a relaxing getaway.',
        4,
        3,
        2800,
        '2197b389-d4cc-4913-bf2b-57f039519f09',
        '1fe41aa9-b812-4e8e-8e76-510e9c463cf2',
        '4660dbda-5f27-4044-afed-5b124847c488',
        TRUE
    ),
    (
        'Rustic Cabin in the Woods',
        'Cottage Or Cabin',
        'Experience nature in this cozy rustic cabin.',
        2,
        1,
        1100,
        '4dd4f734-e302-4642-8f7e-129fb48f6628',
        '837669ff-fd7c-473c-a661-9e557ff86929',
        '4545a5b7-4566-47ea-8349-10890d6e27c4',
        FALSE
    ),
    (
        'Ski-In/Ski-Out Chalet',
        'Chalet',
        'Hit the slopes from this cozy ski-in/ski-out chalet.',
        3,
        2,
        1800,
        'fac5396b-1673-4896-8104-dd7426c8b51d',
        'a3e979e0-3486-43fe-a41b-b99ce0a3524b',
        'd5a513df-f7ef-4601-ad39-c7c30c8ce612',
        FALSE
    ),
    (
        'Mountain View Retreat',
        'House',
        'Enjoy stunning mountain views from this spacious retreat.',
        4,
        3,
        2400,
        'b2afba76-4245-43fa-a7eb-b9aef10996d3',
        'c99917aa-0ac6-4fe5-8e1c-296b1b59c0ac',
        '629e435e-ff54-4dcc-922f-25fc76658307',
        FALSE
    ),
    (
        'Historic Downtown Loft',
        'Apartment',
        'Step back in time with a stay in this historic downtown loft.',
        2,
        1,
        1200,
        'd745845e-071e-4a8f-a578-116172f3e64d',
        '5719a1b2-70b7-4766-b5f9-30adf1eb397f',
        '697040b0-dcce-482e-b523-efe4dc6bcb67',
        FALSE
    );

INSERT INTO
    "property_amenity" (property_id, amenity_id)
VALUES (
        'de466908-76bb-43b0-af85-de9415b8508a',
        '6a1db613-30be-4ad7-98cb-2da98e061dd3'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        '5d35d4c4-f223-4c8b-a42a-1b92efe9a980'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        'f3f3ed5b-069c-4da8-b1b9-6f650b2b06a7'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        '0805e4c5-b930-4615-af7d-13b6b04361bd'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        '75428c27-a408-4882-89e0-22ececa224ef'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        '1da7fba6-71a5-4b0b-8684-c9bff42fbaba'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        'cb4f5067-e6fa-4ce0-b346-b64fb8acb42a'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        'cfe171fd-b148-4ad6-b10f-944248e7d7bb'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        'a5b02ee3-d001-4f39-a58f-bda0115e0624'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        '73b8d7db-4f87-49e2-861b-f92d786d129e'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        'bad23a20-671e-48bf-b653-97c05537eb06'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        '5f9da567-6a84-4d31-b685-c4116b116c40'
    ),
    (
        'de466908-76bb-43b0-af85-de9415b8508a',
        'c51cdef5-8f85-4433-b54c-59aab84a9aa8'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        '6a1db613-30be-4ad7-98cb-2da98e061dd3'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        'f3f3ed5b-069c-4da8-b1b9-6f650b2b06a7'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        '0805e4c5-b930-4615-af7d-13b6b04361bd'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        '1da7fba6-71a5-4b0b-8684-c9bff42fbaba'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        'a5b02ee3-d001-4f39-a58f-bda0115e0624'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        '73b8d7db-4f87-49e2-861b-f92d786d129e'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        'bad23a20-671e-48bf-b653-97c05537eb06'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        '5f9da567-6a84-4d31-b685-c4116b116c40'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        'c51cdef5-8f85-4433-b54c-59aab84a9aa8'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        '1e5302e2-bf5e-4b86-8e39-b7de4cfb4044'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        'eba6b4ec-bd80-42f4-b68d-e90dfbd47a32'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        '6ada2922-c3ae-4ef9-a9b6-4bce590949db'
    ),
    (
        '52461701-22cc-4828-baa3-84c1a29cac8a',
        '0257e4b9-df14-4413-8bd8-46ab786dbf1a'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        '6a1db613-30be-4ad7-98cb-2da98e061dd3'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        '5d35d4c4-f223-4c8b-a42a-1b92efe9a980'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        'f3f3ed5b-069c-4da8-b1b9-6f650b2b06a7'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        '0805e4c5-b930-4615-af7d-13b6b04361bd'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        '75428c27-a408-4882-89e0-22ececa224ef'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        '1da7fba6-71a5-4b0b-8684-c9bff42fbaba'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        'cb4f5067-e6fa-4ce0-b346-b64fb8acb42a'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        'a5b02ee3-d001-4f39-a58f-bda0115e0624'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        '73b8d7db-4f87-49e2-861b-f92d786d129e'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        '5f9da567-6a84-4d31-b685-c4116b116c40'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        'cfe171fd-b148-4ad6-b10f-944248e7d7bb'
    ),
    (
        '38d478a8-86c2-4212-b6d9-396157ac9dff',
        'c51cdef5-8f85-4433-b54c-59aab84a9aa8'
    ),
    (
        '2152f3c8-3aae-4f69-b71f-46aeb5cf2359',
        '6a1db613-30be-4ad7-98cb-2da98e061dd3'
    ),
    (
        '2152f3c8-3aae-4f69-b71f-46aeb5cf2359',
        '5d35d4c4-f223-4c8b-a42a-1b92efe9a980'
    ),
    (
        '2152f3c8-3aae-4f69-b71f-46aeb5cf2359',
        'f3f3ed5b-069c-4da8-b1b9-6f650b2b06a7'
    ),
    (
        '5952444d-0b78-4510-a382-78e7a1cafcbf',
        'cb4f5067-e6fa-4ce0-b346-b64fb8acb42a'
    ),
    (
        '5952444d-0b78-4510-a382-78e7a1cafcbf',
        'a5b02ee3-d001-4f39-a58f-bda0115e0624'
    ),
    (
        '5952444d-0b78-4510-a382-78e7a1cafcbf',
        '73b8d7db-4f87-49e2-861b-f92d786d129e'
    ),
    (
        '5952444d-0b78-4510-a382-78e7a1cafcbf',
        'bad23a20-671e-48bf-b653-97c05537eb06'
    ),
    (
        '5952444d-0b78-4510-a382-78e7a1cafcbf',
        '5f9da567-6a84-4d31-b685-c4116b116c40'
    ),
    (
        '00b10806-0f58-41d0-9ebe-ed3ff047f0ca',
        'c51cdef5-8f85-4433-b54c-59aab84a9aa8'
    ),
    (
        '00b10806-0f58-41d0-9ebe-ed3ff047f0ca',
        '1e5302e2-bf5e-4b86-8e39-b7de4cfb4044'
    ),
    (
        '00b10806-0f58-41d0-9ebe-ed3ff047f0ca',
        'eba6b4ec-bd80-42f4-b68d-e90dfbd47a32'
    ),
    (
        '00b10806-0f58-41d0-9ebe-ed3ff047f0ca',
        '6ada2922-c3ae-4ef9-a9b6-4bce590949db'
    ),
    (
        '2785eab5-51aa-47ea-b3f1-1d0bd1b3b081',
        '0257e4b9-df14-4413-8bd8-46ab786dbf1a'
    ),
    (
        '2785eab5-51aa-47ea-b3f1-1d0bd1b3b081',
        'cfe171fd-b148-4ad6-b10f-944248e7d7bb'
    ),
    (
        '2785eab5-51aa-47ea-b3f1-1d0bd1b3b081',
        '6a1db613-30be-4ad7-98cb-2da98e061dd3'
    ),
    (
        '2785eab5-51aa-47ea-b3f1-1d0bd1b3b081',
        '5d35d4c4-f223-4c8b-a42a-1b92efe9a980'
    ),
    (
        '2785eab5-51aa-47ea-b3f1-1d0bd1b3b081',
        'f3f3ed5b-069c-4da8-b1b9-6f650b2b06a7'
    ),
    (
        '133421b7-bd08-4db1-a68c-02720dc5acf9',
        '0805e4c5-b930-4615-af7d-13b6b04361bd'
    ),
    (
        '133421b7-bd08-4db1-a68c-02720dc5acf9',
        '75428c27-a408-4882-89e0-22ececa224ef'
    ),
    (
        '133421b7-bd08-4db1-a68c-02720dc5acf9',
        '1da7fba6-71a5-4b0b-8684-c9bff42fbaba'
    ),
    (
        '133421b7-bd08-4db1-a68c-02720dc5acf9',
        'cb4f5067-e6fa-4ce0-b346-b64fb8acb42a'
    ),
    (
        '019de44e-0d59-4859-87b3-7bb57ae7f66e',
        'a5b02ee3-d001-4f39-a58f-bda0115e0624'
    ),
    (
        '019de44e-0d59-4859-87b3-7bb57ae7f66e',
        '73b8d7db-4f87-49e2-861b-f92d786d129e'
    ),
    (
        '019de44e-0d59-4859-87b3-7bb57ae7f66e',
        'bad23a20-671e-48bf-b653-97c05537eb06'
    ),
    (
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf',
        '5f9da567-6a84-4d31-b685-c4116b116c40'
    ),
    (
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf',
        'c51cdef5-8f85-4433-b54c-59aab84a9aa8'
    ),
    (
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf',
        '1e5302e2-bf5e-4b86-8e39-b7de4cfb4044'
    ),
    (
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf',
        'eba6b4ec-bd80-42f4-b68d-e90dfbd47a32'
    ),
    (
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf',
        '6ada2922-c3ae-4ef9-a9b6-4bce590949db'
    ),
    (
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf',
        '0257e4b9-df14-4413-8bd8-46ab786dbf1a'
    ),
    (
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf',
        'cfe171fd-b148-4ad6-b10f-944248e7d7bb'
    ),
    (
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf',
        '6a1db613-30be-4ad7-98cb-2da98e061dd3'
    ),
    (
        '18e4f10e-3602-4db5-b0a7-723e7a5615bf',
        '5d35d4c4-f223-4c8b-a42a-1b92efe9a980'
    );