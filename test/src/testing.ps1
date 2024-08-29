Get-WinEvent -LogName Security -FilterHashtable @{LogonType = 2; Id = 4624} -MaxEvents 5 | 
Select-Object TimeCreated, User, LogonType, @{Name = 'Computer'; Expression = {$_.Properties[6].Value}}