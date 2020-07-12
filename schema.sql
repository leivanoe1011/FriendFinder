
DROP DATABASE IF EXISTS FriendFinder_DB;

CREATE DATABASE FriendFinder_DB;

DROP TABLE IF EXISTS friendFinder;

CREATE TABLE friendFinder
(
    id INT AUTO_INCREMENT NOT NULL,
        PRIMARY KEY(id),
    person_name VARCHAR(255) NOT NULL,
    fav_color VARCHAR(100) NOT NULL,
    fav_drink VARCHAR(100) NOT NULL
)

