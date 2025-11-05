-- ============================================
-- 🌱 SEED SQL para PostgreSQL
-- Baseado no schema atualizado do Prisma
-- ============================================

-- 1️⃣ USERS
INSERT INTO
    "user" (
        id,
        name,
        email,
        password,
        phone,
        role,
        created_at
    )
VALUES (
        '11111111-1111-1111-1111-111111111111',
        'John Doe',
        'john@gmail.com',
        'hashed_password_1',
        '617-555-5555',
        1,
        NOW()
    ),
    (
        '22222222-2222-2222-2222-222222222222',
        'David Johnson',
        'david@gmail.com',
        'hashed_password_2',
        '213-555-5555',
        1,
        NOW()
    ),
    (
        '33333333-3333-3333-3333-333333333333',
        'Michael Brown',
        'michael@gmail.com',
        'hashed_password_3',
        '312-555-5555',
        1,
        NOW()
    ),
    (
        '44444444-4444-4444-4444-444444444444',
        'Robert Anderson',
        'robert@gmail.com',
        'hashed_password_4',
        '303-555-5555',
        1,
        NOW()
    ),
    (
        '55555555-5555-5555-5555-555555555555',
        'Jennifer Martin',
        'jennifer@gmail.com',
        'hashed_password_5',
        '970-555-5555',
        1,
        NOW()
    ),
    (
        '66666666-6666-6666-6666-666666666666',
        'Lisa Taylor',
        'lisa@gmail.com',
        'hashed_password_6',
        '303-555-5555',
        1,
        NOW()
    ),
    (
        '77777777-7777-7777-7777-777777777777',
        'Matthew Harris',
        'matthew@gmail.com',
        'hashed_password_7',
        '215-555-5555',
        1,
        NOW()
    );

-- 2️⃣ LOCATIONS
INSERT INTO
    "location" (
        id,
        street,
        city,
        state,
        zipcode,
        created_at
    )
VALUES (
        'aaa11111-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '120 Tremont Street',
        'Boston',
        'MA',
        '02108',
        NOW()
    ),
    (
        'aaa22222-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '45 Main Street',
        'New York',
        'NY',
        '10001',
        NOW()
    ),
    (
        'aaa33333-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '500 Lux Lane',
        'Los Angeles',
        'CA',
        '90001',
        NOW()
    ),
    (
        'aaa44444-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '123 Countryside Lane',
        'Austin',
        'TX',
        '78701',
        NOW()
    ),
    (
        'aaa55555-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '75 Urban Avenue',
        'Chicago',
        'IL',
        '60601',
        NOW()
    ),
    (
        'aaa66666-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '456 Oceanfront Drive',
        'Miami',
        'FL',
        '33101',
        NOW()
    ),
    (
        'aaa77777-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '789 Forest Lane',
        'Denver',
        'CO',
        '80201',
        NOW()
    ),
    (
        'aaa88888-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '321 Mountain Road',
        'Aspen',
        'CO',
        '81611',
        NOW()
    ),
    (
        'aaa99999-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '600 Summit Drive',
        'Boulder',
        'CO',
        '80301',
        NOW()
    ),
    (
        'aaa00000-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        '123 History Lane',
        'Philadelphia',
        'PA',
        '19101',
        NOW()
    );

-- 3️⃣ RATES
INSERT INTO
    "rate" (
        id,
        weekly,
        monthly,
        nightly,
        created_at
    )
VALUES (
        'bbb11111-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        1100,
        4200,
        0,
        NOW()
    ),
    (
        'bbb22222-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        1000,
        4000,
        0,
        NOW()
    ),
    (
        'bbb33333-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        750,
        3300,
        200,
        NOW()
    ),
    (
        'bbb44444-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        2000,
        0,
        0,
        NOW()
    ),
    (
        'bbb55555-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        1100,
        4200,
        0,
        NOW()
    ),
    (
        'bbb66666-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        2500,
        0,
        500,
        NOW()
    ),
    (
        'bbb77777-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        2000,
        0,
        475,
        NOW()
    ),
    (
        'bbb88888-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        1100,
        0,
        300,
        NOW()
    ),
    (
        'bbb99999-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        1000,
        3800,
        0,
        NOW()
    ),
    (
        'bbb00000-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        550,
        2100,
        0,
        NOW()
    );

-- 4️⃣ PROPERTIES
INSERT INTO
    "property" (
        id,
        owner,
        name,
        type,
        description,
        beds,
        baths,
        square_feet,
        amenities,
        user_id,
        location_id,
        rate_id,
        images,
        is_featured,
        created_at
    )
VALUES (
        'ccc11111-cccc-cccc-cccc-cccccccccccc',
        '1',
        'Boston Commons Retreat',
        'Apartment',
        'Beautiful 2 bedroom apartment near the commons, available weekly or monthly.',
        2,
        1,
        1500,
        ARRAY[
            'Wifi',
            'Full kitchen',
            'Washer & Dryer',
            'Free Parking',
            'Hot Tub',
            '24/7 Security',
            'Wheelchair Accessible',
            'Elevator Access',
            'Dishwasher',
            'Gym/Fitness Center',
            'Air Conditioning',
            'Balcony/Patio',
            'Smart TV',
            'Coffee Maker'
        ],
        '11111111-1111-1111-1111-111111111111',
        'aaa11111-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'bbb11111-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ARRAY['a1.jpg', 'a2.jpg', 'a3.jpg'],
        FALSE,
        '2024-01-01'
    ),
    (
        'ccc22222-cccc-cccc-cccc-cccccccccccc',
        '1',
        'Cozy Downtown Loft',
        'Apartment',
        'A cozy downtown loft with great city views.',
        1,
        1,
        1800,
        ARRAY[
            'Wifi',
            'Full kitchen',
            'Washer & Dryer',
            'Free Parking',
            'Hot Tub',
            '24/7 Security',
            'Wheelchair Accessible',
            'Elevator Access',
            'Dishwasher',
            'High-Speed Internet',
            'Air Conditioning',
            'Smart TV',
            'Outdoor Grill/BBQ'
        ],
        '11111111-1111-1111-1111-111111111111',
        'aaa22222-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'bbb22222-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ARRAY['b1.jpg', 'b2.jpg', 'b3.jpg'],
        FALSE,
        '2024-01-02'
    ),
    (
        'ccc33333-cccc-cccc-cccc-cccccccccccc',
        '2',
        'Luxury Condo with a View',
        'Condo',
        'Experience luxury in this stunning condo with breathtaking views.',
        3,
        2,
        2200,
        ARRAY[
            'Wifi',
            'Full kitchen',
            'Washer & Dryer',
            'Free Parking',
            'Hot Tub',
            '24/7 Security',
            'Wheelchair Accessible',
            'Elevator Access',
            'Dishwasher',
            'Swimming Pool',
            'Gym/Fitness Center',
            'Air Conditioning',
            'Smart TV',
            'Coffee Maker'
        ],
        '22222222-2222-2222-2222-222222222222',
        'aaa33333-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'bbb33333-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ARRAY['c1.jpg', 'c2.jpg', 'c3.jpg'],
        FALSE,
        '2024-01-03'
    ),
    (
        'ccc44444-cccc-cccc-cccc-cccccccccccc',
        '2',
        'Charming Cottage Getaway',
        'Cottage Or Cabin',
        'Escape to this charming cottage for a peaceful retreat.',
        1,
        1,
        900,
        ARRAY[
            'Fireplace',
            'Outdoor Grill/BBQ',
            'Balcony/Patio',
            'Coffee Maker'
        ],
        '22222222-2222-2222-2222-222222222222',
        'aaa44444-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'bbb44444-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ARRAY['d1.jpg', 'd2.jpg', 'd3.jpg'],
        FALSE,
        '2024-01-04'
    ),
    (
        'ccc55555-cccc-cccc-cccc-cccccccccccc',
        '3',
        'Modern Downtown Studio',
        'Studio',
        'Stay in style in this modern downtown studio apartment.',
        1,
        1,
        900,
        ARRAY[
            'High-Speed Internet',
            'Smart TV',
            'Air Conditioning',
            'Gym/Fitness Center',
            'Outdoor Grill/BBQ'
        ],
        '33333333-3333-3333-3333-333333333333',
        'aaa55555-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'bbb55555-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ARRAY['e1.jpg', 'e2.jpg', 'e3.jpg'],
        TRUE,
        '2024-01-05'
    ),
    (
        'ccc66666-cccc-cccc-cccc-cccccccccccc',
        '3',
        'Seaside Retreat',
        'House',
        'Escape to this seaside house for a relaxing getaway.',
        4,
        3,
        2800,
        ARRAY[
            'Beach Access',
            'Swimming Pool',
            'Balcony/Patio',
            'Smart TV',
            'Outdoor Grill/BBQ'
        ],
        '33333333-3333-3333-3333-333333333333',
        'aaa66666-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'bbb66666-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ARRAY['f1.jpg', 'f2.jpg', 'f3.jpg'],
        TRUE,
        '2024-01-06'
    ),
    (
        'ccc77777-cccc-cccc-cccc-cccccccccccc',
        '4',
        'Rustic Cabin in the Woods',
        'Cottage Or Cabin',
        'Experience nature in this cozy rustic cabin.',
        2,
        1,
        1100,
        ARRAY[
            'Fireplace',
            'Outdoor Grill/BBQ',
            'Hiking Trails Access',
            'Pet-Friendly'
        ],
        '44444444-4444-4444-4444-444444444444',
        'aaa77777-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'bbb77777-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ARRAY['g1.jpg', 'g2.jpg', 'g3.jpg'],
        FALSE,
        '2024-01-07'
    ),
    (
        'ccc88888-cccc-cccc-cccc-cccccccccccc',
        '5',
        'Ski-In/Ski-Out Chalet',
        'Chalet',
        'Hit the slopes from this cozy ski-in/ski-out chalet.',
        3,
        2,
        1800,
        ARRAY[
            'Ski Equipment Storage',
            'Fireplace',
            'Balcony/Patio',
            'Smart TV'
        ],
        '55555555-5555-5555-5555-555555555555',
        'aaa88888-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'bbb88888-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ARRAY['h1.jpg', 'h2.jpg', 'h3.jpg'],
        FALSE,
        '2024-01-08'
    ),
    (
        'ccc99999-cccc-cccc-cccc-cccccccccccc',
        '6',
        'Mountain View Retreat',
        'House',
        'Enjoy stunning mountain views from this spacious retreat.',
        4,
        3,
        2400,
        ARRAY[
            'Mountain View',
            'Hiking Trails Access',
            'Air Conditioning',
            'Smart TV',
            'Outdoor Grill/BBQ'
        ],
        '66666666-6666-6666-6666-666666666666',
        'aaa99999-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'bbb99999-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ARRAY['i1.jpg', 'i2.jpg', 'i3.jpg'],
        FALSE,
        '2024-01-09'
    ),
    (
        'ccc00000-cccc-cccc-cccc-cccccccccccc',
        '7',
        'Historic Downtown Loft',
        'Apartment',
        'Step back in time with a stay in this historic downtown loft.',
        2,
        1,
        1200,
        ARRAY[
            'High-Speed Internet',
            'Air Conditioning',
            'Smart TV',
            'Coffee Maker'
        ],
        '77777777-7777-7777-7777-777777777777',
        'aaa00000-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        'bbb00000-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        ARRAY['j1.jpg', 'j2.jpg', 'j3.jpg'],
        FALSE,
        '2024-01-10'
    );