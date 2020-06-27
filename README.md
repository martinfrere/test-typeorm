# test-typeorm
Small test of the tutorial https://www.youtube.com/watch?v=Reb7ISQZCvA&amp;t=531s to get typeorm working in order to use it with nestjs to build an application

! New authentication mode proposed by MySQL 8.0 does not work with the default node package. 

    auth_socket is the new plugin.
    mysql_native_password is the native MySQL authentication mode, it is less secure, but works fine for dev purposes.

you will need to either use the SQL instruction :
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword'; (This is the method I used, need to flush the privileges afterwards).

Or you can use the MySQL X DevAPI for Node. Find more info here : https://medium.com/codespace69/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server-consider-8afadc2385e2. I did not try this method.
