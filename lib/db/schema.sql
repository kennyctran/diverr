CREATE DATABASE IF NOT EXISTS diverr;
-- USE diverr;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email varchar(40),
  name varchar(100),
  signup varchar(25),
  cumulative_time INTEGER
);

CREATE TABLE IF NOT EXISTS tags (
  id SERIAL PRIMARY KEY,
  name varchar(50)
);

CREATE TABLE IF NOT EXISTS logs (
  id SERIAL PRIMARY KEY,
  public boolean,
  id_user INTEGER,
  id_tags INTEGER,
  date varchar(25),
  dive_site varchar(100),
  city varchar(50),
  country varchar(50),
  visibility varchar(20),
  air_temp varchar(20),
  water_temp varchar(20),
  weight varchar(20),
  hood boolean,
  gloves boolean,
  wet_suit boolean,
  waves boolean,
  current boolean,
  controlled_env boolean,
  salt_water boolean,
  boat boolean,
  max_depth varchar(20),
  time_in varchar(25),
  time_out varchar(25),
  rnt INTEGER,
  abt INTEGER,
  tbt INTEGER,
  start_pressure varchar(20),
  end_pressure varchar(20),
  notes text,
  dive_center varchar(50),
  dive_instructor varchar(50),
  instructor_cert varchar(50),
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_tags) REFERENCES tags(id)
);

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  url varchar(100),
  id_log INTEGER,
  FOREIGN KEY (id_log) REFERENCES logs(id)
);

CREATE TABLE IF NOT EXISTS logs_tags (
  id SERIAL PRIMARY KEY,
  id_user INTEGER,
  id_log INTEGER,
  id_tag INTEGER,
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_log) REFERENCES logs(id),
  FOREIGN KEY (id_tag) REFERENCES tags(id)
);

