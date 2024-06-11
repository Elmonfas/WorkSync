CREATE TABLE Users (
    
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    
    Nombre VARCHAR(50),
    
    Apellido VARCHAR(50),
    
    Email VARCHAR(100) UNIQUE,
    
    Password VARCHAR(255)

);