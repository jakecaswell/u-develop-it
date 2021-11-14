Drop Table If Exists candidates;
Drop Table If Exists parties;
Drop Table If Exists voters;

Create Table parties (
    id Integer AUTO_INCREMENT PRIMARY KEY,
    name varChar(50) NOT NULL,
    description TEXT
);

CREATE TABLE candidates (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    party_id INTEGER,
    industry_connected BOOLEAN NOT NULL,
    Constraint fk_party FOREIGN KEY (party_id) References parties(id) ON DELETE SET NULL
);

Create Table voters (
    id Integer AUTO_INCREMENT PRIMARY KEY,
    first_name Varchar(30) Not NULL,
    last_name Varchar(30) NOT NULL,
    email Varchar(50) NOT NULL,
    created_at Datetime Default CURRENT_TIMESTAMP
);