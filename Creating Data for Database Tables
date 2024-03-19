-- data for User table
INSERT INTO User (UserName, FullName, Email, PhoneNumber, Location, Job)
VALUES
('user1', 'John Doe', 'john@example.com', '1234567890', 'New York', 'Software Engineer'),
('user2', 'Jane Smith', 'jane@example.com', '0987654321', 'Los Angeles', 'Data Analyst'),
('user3', 'Alice Johnson', 'alice@example.com', '9876543210', 'Chicago', 'Marketing Specialist'),
('user4', 'Michael Johnson', 'michael@example.com', '3456789012', 'San Francisco', 'Product Manager'),
('user5', 'Emily Brown', 'emily@example.com', '2345678901', 'Seattle', 'Graphic Designer'),
('user6', 'David Wilson', 'david@example.com', '4567890123', 'Boston', 'Financial Analyst'),
('user7', 'Jennifer Lee', 'jennifer@example.com', '5678901234', 'Miami', 'HR Specialist'),
('user8', 'Ryan Garcia', 'ryan@example.com', '6789012345', 'Austin', 'Web Developer'),
('user9', 'Sophia Martinez', 'sophia@example.com', '7890123456', 'Denver', 'Project Manager'),
('user10', 'Ethan Anderson', 'ethan@example.com', '8901234567', 'Portland', 'UI/UX Designer'),
('user11', 'Olivia Rodriguez', 'olivia@example.com', '9012345678', 'Phoenix', 'Data Scientist'),
('user12', 'Noah Hernandez', 'noah@example.com', '0123456789', 'Houston', 'Content Writer'),
('user13', 'Ava Lopez', 'ava@example.com', '1122334455', 'Philadelphia', 'Sales Representative');

-- data for Account table
INSERT INTO Account (UserID)
VALUES
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13);

-- Fake data for Category table
INSERT INTO Category (CategoryName)
VALUES
('Groceries'),
('Entertainment'),
('Utilities'),
('Transportation'),
('Dining'),
('Shopping'),
('Rent'),
('Healthcare'),
('Travel');

--  data for Transaction table
INSERT INTO Transaction (AccountID, Date, Amount, CategoryID)
VALUES
(1, '2024-03-18', 50.00, 1),
(2, '2024-03-18', 25.00, 2),
(3, '2024-03-18', 100.00, 3),
(4, '2024-03-19', 75.00, 4),
(5, '2024-03-19', 50.00, 5),
(6, '2024-03-19', 200.00, 1),
(7, '2024-03-19', 150.00, 2),
(8, '2024-03-19', 80.00, 3),
(9, '2024-03-19', 120.00, 4),
(10, '2024-03-19', 100.00, 5),
(11, '2024-03-19', 90.00, 1),
(12, '2024-03-19', 70.00, 2),
(13, '2024-03-19', 110.00, 3);

-- data for Goal table
INSERT INTO Goal (AccountID, Description, TargetAmount, AchievedAmount, TargetDate, Status)
VALUES
(1, 'Save for vacation', 1000.00, 250.00, '2024-12-31', 'In Progress'),
(2, 'Buy a new laptop', 1500.00, 0.00, '2024-06-30', 'Not Started'),
(3, 'Emergency fund', 2000.00, 500.00, '2025-01-01', 'In Progress'),
(4, 'Purchase new furniture', 800.00, 200.00, '2024-06-30', 'In Progress'),
(5, 'Save for vacation', 2000.00, 500.00, '2024-12-31', 'Not Started'),
(6, 'Emergency fund', 3000.00, 1000.00, '2025-01-01', 'In Progress'),
(7, 'Buy a car', 10000.00, 0.00, '2025-06-30', 'Not Started'),
(8, 'Home renovation', 5000.00, 1500.00, '2024-10-31', 'In Progress'),
(9, 'Invest in stocks', 3000.00, 600.00, '2024-12-31', 'In Progress'),
(10, 'Save for down payment', 15000.00, 0.00, '2025-03-31', 'Not Started'),
(11, 'Travel around Europe', 5000.00, 0.00, '2025-08-31', 'Not Started'),
(12, 'Education fund', 2000.00, 300.00, '2024-09-30', 'In Progress'),
(13, 'Purchase new gadgets', 2000.00, 0.00, '2025-01-31', 'Not Started');

-- data for Reminder table
INSERT INTO Reminder (AccountID, BillName, DueDate, Recurring)
VALUES
(1, 'Electricity Bill', '2024-03-25', FALSE),
(2, 'Internet Bill', '2024-03-20', TRUE),
(3, 'Phone Bill', '2024-03-30', FALSE),
(4, 'Medical checkup', '2024-04-15', FALSE),
(5, 'Monthly savings', '2024-03-25', TRUE),
(6, 'Rent payment', '2024-04-01', TRUE),
(7, 'Car insurance', '2024-03-30', FALSE),
(8, 'Home insurance', '2024-04-10', FALSE),
(9, 'Investment review', '2024-04-05', FALSE),
(10, 'Mortgage payment', '2024-03-31', TRUE),
(11, 'Flight booking', '2024-07-15', FALSE),
(12, 'Online course subscription', '2024-04-05', TRUE),
(13, 'Gadget maintenance', '2024-04-20', FALSE);
-- Populating User table

INSERT INTO User (UserName, FullName, Email, PhoneNumber, Location, Job)
VALUES
('user1', 'John Doe', 'john@example.com', '1234567890', 'New York', 'Software Engineer'),
('user2', 'Jane Smith', 'jane@example.com', '0987654321', 'Los Angeles', 'Data Analyst'),
('user3', 'Alice Johnson', 'alice@example.com', '9876543210', 'Chicago', 'Marketing Specialist');

-- Populating Transaction table
INSERT INTO Transaction (AccountID, Date, Amount, CategoryID)
VALUES
(1, '2024-03-20', 75.00, 1),
(1, '2024-03-21', 50.00, 2),
(2, '2024-03-20', 60.00, 3),
(2, '2024-03-21', 45.00, 4),
(3, '2024-03-20', 80.00, 5),
(3, '2024-03-21', 55.00, 1);

-- Populating Category table
INSERT INTO Category (CategoryName)
VALUES
('Groceries'),
('Entertainment'),
('Utilities'),
('Transportation'),
('Dining');

-- Populating Goal table
INSERT INTO Goal (AccountID, Description, TargetAmount, AchievedAmount, TargetDate, Status)
VALUES
(1, 'Save for vacation', 1000.00, 250.00, '2024-12-31', 'In Progress'),
(2, 'Buy a new laptop', 1500.00, 0.00, '2024-06-30', 'Not Started'),
(3, 'Emergency fund', 2000.00, 500.00, '2025-01-01', 'In Progress');


-- Additional fake data for Transaction table for existing users
INSERT INTO Transaction (AccountID, Date, Amount, CategoryID)
VALUES
-- User 1
(1, '2024-03-20', 75.00, 4),
(1, '2024-03-21', 50.00, 5),
(1, '2024-03-22', 30.00, 1),
-- User 2
(2, '2024-03-20', 60.00, 2),
(2, '2024-03-21', 45.00, 3),
(2, '2024-03-22', 20.00, 4),
-- User 3
(3, '2024-03-20', 80.00, 5),
(3, '2024-03-21', 55.00, 1),
(3, '2024-03-22', 40.00, 2);

-- Additional fake data for Goal table for existing users
INSERT INTO Goal (AccountID, Description, TargetAmount, AchievedAmount, TargetDate, Status)
VALUES
-- User 1
(1, 'Buy a new laptop', 1500.00, 0.00, '2024-06-30', 'Not Started'),
(1, 'Save for vacation', 2000.00, 500.00, '2024-12-31', 'In Progress'),
-- User 2
(2, 'Emergency fund', 3000.00, 1000.00, '2025-01-01', 'In Progress'),
(2, 'Buy a car', 10000.00, 0.00, '2025-06-30', 'Not Started'),
-- User 3
(3, 'Home renovation', 5000.00, 1500.00, '2024-10-31', 'In Progress'),
(3, 'Invest in stocks', 3000.00, 600.00, '2024-12-31', 'In Progress');

-- Additional fake data for Reminder table for existing users
INSERT INTO Reminder (AccountID, BillName, DueDate, Recurring)
VALUES
-- User 1
(1, 'Internet Bill', '2024-03-25', TRUE),
(1, 'Electricity Bill', '2024-04-01', FALSE),
-- User 2
(2, 'Phone Bill', '2024-03-30', FALSE),
(2, 'Rent payment', '2024-04-01', TRUE),
-- User 3
(3, 'Car insurance', '2024-03-30', FALSE),
(3, 'Health Insurance', '2024-04-05', TRUE);


-- Additional fake data for Transaction table for existing users
INSERT INTO Transaction (AccountID, Date, Amount, CategoryID)
VALUES
-- User 1
(1, '2024-03-23', 80.00, 3),
(1, '2024-03-24', 70.00, 2),
-- User 2
(2, '2024-03-23', 65.00, 1),
(2, '2024-03-24', 40.00, 5),
-- User 3
(3, '2024-03-23', 35.00, 4),
(3, '2024-03-24', 20.00, 3),
-- User 4
(4, '2024-03-23', 45.00, 2),
(4, '2024-03-24', 60.00, 1),
-- User 5
(5, '2024-03-23', 55.00, 5),
(5, '2024-03-24', 30.00, 4),
-- User 6
(6, '2024-03-23', 70.00, 3),
(6, '2024-03-24', 25.00, 2),
-- User 7
(7, '2024-03-23', 40.00, 1),
(7, '2024-03-24', 50.00, 5),
-- User 8
(8, '2024-03-23', 75.00, 4),
(8, '2024-03-24', 55.00, 3),
-- User 9
(9, '2024-03-23', 60.00, 2),
(9, '2024-03-24', 45.00, 1),
-- User 10
(10, '2024-03-23', 65.00, 3),
(10, '2024-03-24', 30.00, 4),
-- User 11
(11, '2024-03-23', 50.00, 5),
(11, '2024-03-24', 35.00, 2),
-- User 12
(12, '2024-03-23', 40.00, 1),
(12, '2024-03-24', 45.00, 3),
-- User 13
(13, '2024-03-23', 55.00, 4),
(13, '2024-03-24', 20.00, 5);

-- Additional fake data for Goal table for existing users
INSERT INTO Goal (AccountID, Description, TargetAmount, AchievedAmount, TargetDate, Status)
VALUES
-- User 1
(1, 'Emergency fund', 3000.00, 1000.00, '2025-01-01', 'In Progress'),
(1, 'Buy a car', 10000.00, 0.00, '2025-06-30', 'Not Started'),
-- User 2
(2, 'Home renovation', 5000.00, 1500.00, '2024-10-31', 'In Progress'),
(2, 'Invest in stocks', 3000.00, 600.00, '2024-12-31', 'In Progress'),
-- User 3
(3, 'Save for down payment', 15000.00, 0.00, '2025-03-31', 'Not Started'),
(3, 'Travel around Europe', 5000.00, 0.00, '2025-08-31', 'Not Started'),
-- User 4
(4, 'Education fund', 2000.00, 300.00, '2024-09-30', 'In Progress'),
(4, 'Purchase new gadgets', 2000.00, 0.00, '2025-01-31', 'Not Started'),
-- User 5
(5, 'Emergency fund', 3000.00, 1000.00, '2025-01-01', 'In Progress'),
(5, 'Buy a car', 10000.00, 0.00, '2025-06-30', 'Not Started'),
-- User 6
(6, 'Home renovation', 5000.00, 1500.00, '2024-10-31', 'In Progress'),
(6, 'Invest in stocks', 3000.00, 600

-- Additional fake data for Transaction table for existing users
INSERT INTO Transaction (AccountID, Date, Amount, CategoryID)
SELECT AccountID, '2024-03-20', ROUND(RAND() * 100, 2), FLOOR(RAND() * 5) + 1
FROM Account WHERE UserID <= 13;

-- Additional fake data for Goal table for existing users
INSERT INTO Goal (AccountID, Description, TargetAmount, AchievedAmount, TargetDate, Status)
SELECT AccountID, CONCAT('Goal ', ROUND(RAND() * 100)), ROUND(RAND() * 5000, 2), ROUND(RAND() * 2500, 2), DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 365) DAY), IF(ROUND(RAND()), 'In Progress', 'Not Started')
FROM Account WHERE UserID <= 13;

-- Additional fake data for Reminder table for existing users
INSERT INTO Reminder (AccountID, BillName, DueDate, Recurring)
SELECT AccountID, CONCAT('Reminder ', ROUND(RAND() * 100)), DATE_ADD(NOW(), INTERVAL FLOOR(RAND() * 30) DAY), ROUND(RAND())
FROM Account WHERE UserID <= 13;
