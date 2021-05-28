-- id 1
insert into users (email, name, signup, cumulative_time) values ('19ccrow99@gmail.com', 'Cameron Crow', '2021-05-24T15:46:30.409Z', 135);
-- id 2
insert into users (email, name, signup, cumulative_time) values ('sunilrgadgil@gmail.com', 'Sunil Gadgil', '2021-06-24T15:46:30.409Z', 125);

-- id 1 (public)
insert into logs (public, id_user, date, dive_site, city, country, visibility, air_temp, water_temp, weight, hood, gloves, wet_suit, waves, current, controlled_env, salt_water, boat, max_depth, time_in, time_out, rnt, abt, tbt, start_pressure, end_pressure, notes, dive_center, dive_instructor, instructor_cert) values (true, 1, '2021-05-24T16:02:16.530Z', 'Borbor''s Lagoon', 'Galveston', 'United States', '13 feet', '90 degrees F', '65 degrees F', '14 pounds', true, true, false, false, false, true, true, false, '40 feet', '2021-05-24T16:02:16.530Z', '2021-06-24T16:02:16.530Z', 20, 15, 35, '6 psi', '12 psi', 'I saw a turtle and jellyfish!', 'Small Island Divers', 'Ferb', '789012');
-- id 2 (private)
insert into logs (public, id_user, date, dive_site, city, country, visibility, air_temp, water_temp, weight, hood, gloves, wet_suit, waves, current, controlled_env, salt_water, boat, max_depth, time_in, time_out, rnt, abt, tbt, start_pressure, end_pressure, notes, dive_center, dive_instructor, instructor_cert) values (false, 1, '2021-05-24T16:02:16.530Z', 'Bob''s Fun Dives', 'San Francisco', 'United States', '13 feet', '90 degrees F', '65 degrees F', '14 pounds', true, true, false, false, false, true, true, false, '40 feet', '2021-05-24T16:02:16.530Z', '2021-06-24T16:02:16.530Z', 20, 15, 35, '6 psi', '12 psi', 'I saw a turtle and jellyfish!', 'Big Island Divers', 'Ferb', '789012');
-- id 3 (public)
insert into logs (public, id_user, date, dive_site, city, country, visibility, air_temp, water_temp, weight, hood, gloves, wet_suit, waves, current, controlled_env, salt_water, boat, max_depth, time_in, time_out, rnt, abt, tbt, start_pressure, end_pressure, notes, dive_center, dive_instructor, instructor_cert) values (true, 2, '2021-06-24T16:02:16.530Z', 'Borbor''s Lagoon', 'Galveston', 'United States', '13 feet', '90 degrees F', '65 degrees F', '14 pounds', true, true, false, false, false, true, true, false, '40 feet', '2021-05-24T16:02:16.530Z', '2021-06-24T16:02:16.530Z', 20, 15, 35, '6 psi', '12 psi', 'I saw a turtle and jellyfish!', 'Small Island Divers', 'Ferb', '789012');
-- id 4 (private)
insert into logs (public, id_user, date, dive_site, city, country, visibility, air_temp, water_temp, weight, hood, gloves, wet_suit, waves, current, controlled_env, salt_water, boat, max_depth, time_in, time_out, rnt, abt, tbt, start_pressure, end_pressure, notes, dive_center, dive_instructor, instructor_cert) values (false, 2, '2021-06-24T16:02:16.530Z', 'Bob''s Fun Dives', 'San Francisco', 'United States', '13 feet', '90 degrees F', '65 degrees F', '14 pounds', true, true, false, false, false, true, true, false, '40 feet', '2021-05-24T16:02:16.530Z', '2021-06-24T16:02:16.530Z', 20, 15, 35, '6 psi', '12 psi', 'I saw a turtle and jellyfish!', 'Big Island Divers', 'Ferb', '789012');

-- id 1
insert into photos (url, id_log) values ('https://images.unsplash.com/photo-1589634749362-a8ef3056cbe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', 1);
-- id 2
insert into photos (url, id_log) values ('https://images.unsplash.com/photo-1495012379376-194a416fcc5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80', 1);
-- id 3
insert into photos (url, id_log) values ('https://images.unsplash.com/photo-1589634749362-a8ef3056cbe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', 2);
-- id 4
insert into photos (url, id_log) values ('https://images.unsplash.com/photo-1495012379376-194a416fcc5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80', 2);
-- id 5
insert into photos (url, id_log) values (ç, 3);
-- id 6
insert into photos (url, id_log) values ('https://images.unsplash.com/photo-1610981263015-ef95481e9ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80', 3);

-- id 1
insert into tags (name) values ('borbor''s lagoon');
-- id 2
insert into tags (name) values ('galveston');
-- id 3
insert into tags (name) values ('united states');
-- id 4
insert into tags (name) values ('turtle');
-- id 5
insert into tags (name) values ('jellyfish');
-- id 6
insert into tags (name) values ('bob''s fun dives');
-- id 7
insert into tags (name) values ('san francisco');
-- id 8
insert into tags (name) values ('sea turtle');

-- id 1
insert into logs_tags (id_user, id_log, id_tag) values (1, 1, 1);
-- id 2
insert into logs_tags (id_user, id_log, id_tag) values (1, 1, 2);
-- id 3
insert into logs_tags (id_user, id_log, id_tag) values (1, 1, 3);
-- id 4
insert into logs_tags (id_user, id_log, id_tag) values (1, 1, 4);
-- id 5
insert into logs_tags (id_user, id_log, id_tag) values (1, 1, 5);
-- id 6
insert into logs_tags (id_user, id_log, id_tag) values (1, 2, 6);
-- id 7
insert into logs_tags (id_user, id_log, id_tag) values (1, 2, 7);
-- id 8
insert into logs_tags (id_user, id_log, id_tag) values (1, 2, 3);
-- id 9
insert into logs_tags (id_user, id_log, id_tag) values (1, 2, 4);
-- id 10
insert into logs_tags (id_user, id_log, id_tag) values (2, 3, 8);



