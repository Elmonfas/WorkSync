CREATE TABLE shifts (

    shift_id INT AUTO_INCREMENT PRIMARY KEY,
    
    user_id INT NOT NULL,
    
    day DATE NOT NULL,
    
    start_time TIME NOT NULL,
    
    end_time TIME NOT NULL,
    
    FOREIGN KEY (user_id) REFERENCES Users(ID)

);