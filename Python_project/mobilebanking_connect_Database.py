import mysql.connector
from mysql.connector import Error


def accountdatabase():
    try:
        conn = mysql.connector.connect(
            user='root', host='localhost', database='mobilebanking2', password='!@#qweasd')

        cursor = conn.cursor()
        cursor.execute(
            "SELECT balance FROM  user_account WHERE account_no = 2345")

        rows = cursor.fetchone()
        print(rows[0])
        a = 1000
        addr = rows[0]+a
        print(addr)

        # print('Total Row(s):', cursor.rowcount)
        # for row in rows:
        #     print(row)

        # while row is not None:
        #     print(row)
        #     row = cursor.fetchone()

    except Error as e:
        print(e)

    finally:
        cursor.close()
        conn.close()


if __name__ == '__main__':
    accountdatabase()
