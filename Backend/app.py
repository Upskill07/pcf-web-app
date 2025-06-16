'''from flask import Flask, jsonify, send_file
from flask_cors import CORS
import mysql.connector
import io

app = Flask(__name__)
CORS(app)

# MySQL configuration - removed trailing space in database name
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '12345',
    'database': 'pcf'
}

# Existing route for slider images list
@app.route('/api/images', methods=['GET'])
def get_image_list():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT image_id, image_name FROM tbl_slider ")
    images = cursor.fetchall()
    conn.close()

    return jsonify([
        {'id': img_id, 'name': name, 'url': f'/api/image/{img_id}'}
        for img_id, name in images
    ])

# Existing route to serve a slider image by id
@app.route('/api/image/<int:image_id>', methods=['GET'])
def get_image(image_id):
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT image_data FROM tbl_slider WHERE image_id = %s", (image_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return send_file(
            io.BytesIO(row[0]),
            mimetype='image/jpeg',
            as_attachment=False
        )
    return jsonify({'error': 'Image not found'}), 404

# NEW route for gallery images list
@app.route('/api/gallery', methods=['GET'])
def get_gallery_list():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT id, image_name FROM schoolkit")
    images = cursor.fetchall()
    conn.close()

    return jsonify([
        {'id': img_id, 'name': name, 'url': f'/api/gallery/image/{img_id}'}
        for img_id, name in images
    ])

# NEW route to serve gallery image by id
@app.route('/api/gallery/image/<int:image_id>', methods=['GET'])
def get_gallery_image(image_id):
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT image_data FROM schoolkit WHERE id = %s", (image_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return send_file(
            io.BytesIO(row[0]),
            mimetype='image/jpeg',
            as_attachment=False
        )
    return jsonify({'error': 'Gallery image not found'}), 404

#new code

@app.route('/api/gallery/ice', methods=['GET'])
def get_gallery_cold():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT id, image_name FROM Winter")
    images = cursor.fetchall()
    conn.close()

    return jsonify([
        {'id': img_id, 'name': name, 'url': f'/api/gallery/ice/image/{img_id}'}
        for img_id, name in images
    ])

# NEW route to serve gallery image by id
@app.route('/api/gallery/image/<int:image_id>', methods=['GET'])
def get_gallery_picture(image_id):
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT image_data FROM Winter WHERE id = %s", (image_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return send_file(
            io.BytesIO(row[0]),
            mimetype='image/*',
            as_attachment=False
        )
    return jsonify({'error': 'Gallery image not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
    
''''''
from flask import Flask, jsonify, send_file, request
from flask_cors import CORS
import mysql.connector
import io

app = Flask(__name__)
CORS(app)

# MySQL configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '12345',
    'database': 'pcf'
}

# Route for slider images list
@app.route('/api/images', methods=['GET'])
def get_slider_image_list():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT image_id, image_name FROM tbl_slider")
    images = cursor.fetchall()
    conn.close()

    return jsonify([
        {'id': img_id, 'name': name, 'url': f'/api/image/{img_id}'}
        for img_id, name in images
    ])

# Route to serve a slider image by ID
@app.route('/api/image/<int:image_id>', methods=['GET'])
def get_slider_image(image_id):
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT image_data FROM tbl_slider WHERE image_id = %s", (image_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return send_file(
            io.BytesIO(row[0]),
            mimetype='image/jpeg',
            as_attachment=False
        )
    return jsonify({'error': 'Image not found'}), 404

# Dynamic gallery image list route (based on category)
@app.route('/api/gallery', methods=['GET'])
def get_gallery_images():
    category = request.args.get('category')

    table_mapping = {
        'School Kit': 'schoolkit',
        'Bolkya Bhinti': 'bolkya_bhinti',
        'Winter': 'winter',
        'Social Event': 'social_event',
        'Gift of Education': 'gift_of_education',
        'Dynda Library': 'dynda_library',
        'Seed Born Event': 'seed_born_event',
        'Career Guidance Workshops': 'career_guidance',
        'Antarang': 'antarang',
        'Vichardhan': 'vichardhan',
        'Covid': 'covid',
        'Republic Day': 'republic_day'
    }

    table_name = table_mapping.get(category)
    if not table_name:
        return jsonify([])

    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute(f"SELECT id, image_name FROM {table_name}")
    images = cursor.fetchall()
    conn.close()

    return jsonify([
        {'id': img_id, 'name': name, 'url': f'/api/gallery/image/{category}/{img_id}'}
        for img_id, name in images
    ])

# Route to serve gallery image by category and ID
@app.route('/api/gallery/image/<string:category>/<int:image_id>', methods=['GET'])
def get_image_by_category(category, image_id):
    table_mapping = {
        'School Kit': 'schoolkit',
        'Bolkya Bhinti': 'bolkya_bhinti',
        'Winter': 'winter',
        'Social Event': 'social_event',
        'Gift of Education': 'gift_of_education',
        'Dynda Library': 'dynda_library',
        'Seed Born Event': 'seed_born_event',
        'Career Guidance Workshops': 'career_guidance',
        'Antarang': 'antarang',
        'Vichardhan': 'vichardhan',
        'Covid': 'covid',
        'Republic Day': 'republic_day'
    }

    table_name = table_mapping.get(category)
    if not table_name:
        return jsonify({'error': 'Invalid category'}), 400

    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute(f"SELECT image_data FROM {table_name} WHERE id = %s", (image_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return send_file(
            io.BytesIO(row[0]),
            mimetype='image/jpeg',
            as_attachment=False
        )
    return jsonify({'error': 'Image not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
'''
from flask import Flask, jsonify, send_file, request
from flask_cors import CORS
import mysql.connector
import io

app = Flask(__name__)
CORS(app)

# MySQL configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '12345',
    'database': 'pcf'
}

# -------------------- SLIDER --------------------
@app.route('/api/images', methods=['GET'])
def get_slider_image_list():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT image_id, image_name FROM tbl_slider")
    images = cursor.fetchall()
    conn.close()

    return jsonify([
        {'id': img_id, 'name': name, 'url': f'/api/image/{img_id}'}
        for img_id, name in images
    ])

@app.route('/api/image/<int:image_id>', methods=['GET'])
def get_slider_image(image_id):
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT image_data FROM tbl_slider WHERE image_id = %s", (image_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return send_file(io.BytesIO(row[0]), mimetype='image/jpeg', as_attachment=False)
    return jsonify({'error': 'Image not found'}), 404

# -------------------- GALLERY (NEW) --------------------
@app.route('/api/gallery', methods=['GET'])
def get_gallery_images():
    project_name = request.args.get('category')  # still use category param

    if not project_name:
        return jsonify({'error': 'Category/section is required'}), 400

    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT id, image_name FROM gallery WHERE project_name = %s", (project_name,))
    images = cursor.fetchall()
    conn.close()

    return jsonify([
        {'id': img_id, 'name': name, 'url': f'/api/gallery/image/{project_name}/{img_id}'}
        for img_id, name in images
    ])

@app.route('/api/gallery/image/<string:project_name>/<int:image_id>', methods=['GET'])
def get_image_by_project_name(project_name, image_id):
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("SELECT image_data FROM gallery WHERE project_name = %s AND id = %s", (project_name, image_id))
    row = cursor.fetchone()
    conn.close()

    if row:
        return send_file(io.BytesIO(row[0]), mimetype='image/jpeg', as_attachment=False)
    return jsonify({'error': 'Image not found'}), 404

# -------------------- MAIN --------------------
if __name__ == '__main__':
    app.run(debug=True)


# PrashantLamture

# PrashantLamture  # PrashantLamture# PrashantLamture# PrashantLamture