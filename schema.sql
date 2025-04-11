CREATE TABLE form1 (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100),
    email NVARCHAR(100)
);
CREATE TABLE form2 (
    id INT IDENTITY(1,1) PRIMARY KEY,
    feedback NVARCHAR(MAX)
);
CREATE TABLE form3 (
    id INT IDENTITY(1,1) PRIMARY KEY,
    answer1 NVARCHAR(255),
    answer2 NVARCHAR(255)
);
CREATE TABLE form4 (
    id INT IDENTITY(1,1) PRIMARY KEY,
    booking_date DATE,
    location NVARCHAR(255)
);
CREATE TABLE form5 (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100),
    message NVARCHAR(MAX)
);
