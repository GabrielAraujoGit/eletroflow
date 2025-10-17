import sqlite3

conn = sqlite3.connect("pedidos.db")
cur = conn.cursor()
cur.execute("ALTER TABLE pedidos ADD COLUMN empresa_id INTEGER;")
conn.commit()
conn.close()
