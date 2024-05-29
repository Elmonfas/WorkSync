CREATE TABLE requests (
    
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    
    user_id INT NOT NULL,
    
    request_date DATE NOT NULL,
    
    requested_day DATE NOT NULL,
    
    message TEXT NOT NULL,
    
    FOREIGN KEY (user_id) REFERENCES Users(ID)

);
