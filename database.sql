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
    "years_of_experience" INTEGER,
    "coach_level" coach_level_enum,
    "activity_type" activity_type_enum,
    "ski_or_snow" ski_or_snow_enum,
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
    "gig_coach_level" VARCHAR (80),
    "gig_activity_type" activity_type_enum,
    "gig_ski_or_snow" ski_or_snow_enum,
    "location" location_enum,
    "price" INTEGER,
    "finished_status" BOOLEAN,
    "applied_status" BOOLEAN,
    "accepted_status" BOOLEAN,
    FOREIGN KEY ("user_id") REFERENCES "user" ("id"),
    FOREIGN KEY ("coach_user_id") REFERENCES "user" ("id")
);

-- Dummy data for user
INSERT INTO "user" ("username", "password", "name", "phone_number", "email", "description", "legal_status", "date_accepted")
VALUES
    ('john123', 'password123', 'John Doe', '1234567890', 'john@example.com', 'Experienced coach', true, '2023-01-01'),
    ('jane456', 'pass456', 'Jane Smith', '9876543210', 'jane@example.com', 'Certified instructor', true, '2023-02-15'),
    ('sam789', 'pass789', 'Sam Johnson', '5555555555', 'sam@example.com', 'Freestyle specialist', true, '2023-03-10');

-- Dummy data for gigs in Overview for users 1 & 2:
INSERT INTO "gig" ("user_id", "coach_user_id", "title", "description", "date_for_gig", "date_applied", "year_of_experience", "time_for_gig", "gig_coach_level", "gig_activity_type", "gig_ski_or_snow", "location", "price", "finished_status", "applied_status", "accepted_status")
VALUES
    (1, 2, 'Prime Ski Club', 'Private ski lesson for beginners', '2023-01-05', '2023-01-07', 3, '09:00:00', 'Instructor level 3', 'Alpine', 'Ski', 'Lutsen Mountains', 50, true, true, true),
    (3, 1, 'Snowboard Club B', 'Advanced snowboard coaching session', '2023-02-10', '2023-02-12', 5, '13:00:00', 'Instructor level 4', 'Slopestyle', 'Snowboard', 'Spirit Mountain', 75, true, true, true),
    (3, 1, 'Freestyle Club', 'Intensive freestyle training camp', '2023-03-15', '2023-03-18', 8, '10:00:00', 'Coach level 100', 'Halfpipe', 'Ski', 'Giants Ridge', 100, true, true, true);

-- Dummy Data Cont'd: Available Gigs for User ID 1 & User ID 2:
INSERT INTO "gig" ("user_id", "title", "description", "date_for_gig", "year_of_experience", "time_for_gig", "gig_coach_level", "gig_activity_type", "gig_ski_or_snow", "location", "price", "finished_status", "applied_status", "accepted_status")
VALUES
    (4, 'Test Ski Club', 'Private ski lesson for beginners', '2023-11-05', 3, '09:00:00', 'Instructor level 3', 'Alpine', 'Ski', 'Lutsen Mountains', 50, false, false, false),
    (3, 'Snowboard Club C', 'Advanced snowboard coaching session', '2023-12-10', 5, '13:00:00', 'Instructor level 4', 'Slopestyle', 'Snowboard', 'Spirit Mountain', 75, false, false, false);
    
-- Dummy Data Cont'd: Gig created by user ID 1:
INSERT INTO "gig" ("user_id", "title", "description", "date_for_gig", "gig_coach_level", "year_of_experience", "time_for_gig", "gig_activity_type", "gig_ski_or_snow", "location", "price", "finished_status", "applied_status", "accepted_status")
VALUES
    (1, 'Prime Ski Club', 'Ski lesson for group of 6 kids and two chaperones, ages ranging 8-12.', '2023-11-15', 'Unqualified', 3, '12:00:00', 'Alpine', 'Ski', 'Afton Alps', 50, false, false, false);