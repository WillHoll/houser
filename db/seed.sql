CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INT,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL 
)

INSERT INTO houses (name, address, city, state, zip)
VALUES ('This House', '1234 Awesome St.', 'Weed', 'CA', 65433, 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.archiscene.net%2Fwp-content%2Fuploads%2F2014%2F05%2FHampstead-Houses-KSR-Architects-01.jpg&f=1&nofb=1', 40000, 1200),
('Cool House', '432 Trash Heap Blvd.', 'Los Angeles', 'CA', 48576, 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi0.wp.com%2Fmedia.high-road-artist.com%2Fwp-content%2Fuploads%2F2012%2F06%2FIMG_1233.jpg&f=1&nofb=1', 4000, 1100),
('Big House', '6543 Major failure way', 'Houston', 'TX', 87654'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.huf-haus.com%2Ffileadmin%2F_processed_%2F2%2F6%2Fcsm_HUF_Haus_Bungalow_ART_ebenholz__10__f22d772037.jpg&f=1&nofb=1', 4500, 1500)