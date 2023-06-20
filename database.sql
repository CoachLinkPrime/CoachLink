CREATE TYPE location_enum AS ENUM (
    'Lutsen Mountains',
    'Spirit Mountain',
    'Giants Ridge',
    'Afton Alps',
    'Mt. Kato',
    'Welch Village',
    'Powder Ridge',
    'Wild Mountain',
    'Andes Tower Hills',
    'Buena Vista',
    'Hyland Hills',
    'Detroit Mountain',
    'Buck Hill Ski Area',
    'Trollhaugen',
    'Granite Peak'
);

CREATE TYPE activity_type_enum AS ENUM (
    'Slopestyle',
    'Boarder cross',
    'Skier cross',
    'Halfpipe',
    'Alpine (PGS/PSL)',
    'Alpine' 
);

CREATE TYPE coach_level_enum AS ENUM (
    'Instructor level 1',
    'Instructor level 2',
    'Instructor level 3',
    'Instructor level 4',
    'Coach level 100',
    'Coach level 200',
    'Coach level 300',
    'Coach level 400',
    'Unqualified'
);

CREATE TYPE ski_or_snow_enum AS ENUM ('Ski', 'Snowboard');

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (90) UNIQUE NOT NULL,
    "password" VARCHAR (100) NOT NULL,
    "name" VARCHAR (100),
    "phone_number" VARCHAR (10),
    "email" VARCHAR (100) NOT NULL,
    "description" VARCHAR (1300),
    "legal_status" BOOLEAN DEFAULT FALSE,
    "date_accepted" VARCHAR
);

CREATE TABLE "gig" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER,
    "coach_user_id" INTEGER,
    "title" VARCHAR (80),
    "description" VARCHAR (1200),
    "date_for_gig" VARCHAR(80),
    "date_applied" DATE,
    "date_published" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "year_of_experience" INTEGER,
    "time_for_gig" VARCHAR (80),
    "coach_level" VARCHAR (80),
    "activity_type" activity_type_enum,
    "ski_or_snow" ski_or_snow_enum,
    "location" location_enum,
    "price" INTEGER,
    "status" BOOLEAN,
    "applied_status" BOOLEAN,
    FOREIGN KEY ("user_id") REFERENCES "user" ("id"),
    FOREIGN KEY ("coach_user_id") REFERENCES "user" ("id")
);

-- Dummy data for user
INSERT INTO "user" ("username", "password", "name", "phone_number", "email", "description", "legal_status", "date_accepted")
VALUES

    ('john123', 'password123', 'John Doe', '1234567890', 'john@example.com', 'Experienced coach', true, '2023-01-01'),
    ('jane456', 'pass456', 'Jane Smith', '9876543210', 'jane@example.com', 'Certified instructor', true, '2023-02-15'),
    ('sam789', 'pass789', 'Sam Johnson', '5555555555', 'sam@example.com', 'Freestyle specialist', true, '2023-03-10');

-- Dummy data for gig
INSERT INTO "gig" ("user_id", "coach_user_id", "title", "description", "date_for_gig", "date_applied", "year_of_experience", "time_for_gig", "coach_level", "activity_type", "ski_or_snow", "location", "price", "status", "applied_status")
VALUES

    (1, 2, 'Ski Lesson', 'Private ski lesson for beginners', '2023-01-05', '2023-01-07', 3, '09:00:00', 'Instructor level 3', 'Alpine', 'Ski', 'Lutsen Mountains', 50, true, true),
    (2, 1, 'Snowboard Coaching', 'Advanced snowboard coaching session', '2023-02-10', '2023-02-12', 5, '13:00:00', 'Instructor level 4', 'Slopestyle', 'Snowboard', 'Spirit Mountain', 75, true, true),
    (3, 1, 'Freestyle Training', 'Intensive freestyle training camp', '2023-03-15', '2023-03-18', 8, '10:00:00', 'Coach level 100', 'Halfpipe', 'Ski', 'Giants Ridge', 100, true, true);

    -- "coach_level" coach_level_enum,
    -- "activity_type" activity_type_enum,
    -- "ski_or_snow" ski_or_snow_enum,
    -- "location" location_enum,