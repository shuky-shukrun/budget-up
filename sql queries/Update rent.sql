/****** Script for SelectTopNRows command from SSMS  ******/
UPDATE Transactions SET
                  amount = 3450
                  WHERE
                  id in (
SELECT [id]
  FROM [dbo].[Transactions]
  where email = 'demouser2@gmail.com' and category = 'Mortgage / Rent' and tDate > '2021-01-01' and tDate < '2021-11-01')


  -- delete from Transactions where email = 'elnn.sh@gmail.com'
DELETE FROM Transactions WHERE email = 'demouser3@gmail.com'
-- UPDATE Transactions SET tDate = '2022-01-01' WHERE id = 16923
-- DELETE FROM Transactions WHERE email = 'demouser2@gmail.com' and category = 'Gas'