import bcrypt from 'bcrypt';

const verifyPassword = async () => {
    const storedHash = '$2b$10$XOHI0.vg73ve9Oy73lqU5.W//tVQuqMIAKJn3n25ZA2DUF.YGm6vq';                        
    const testPassword = '1234'; // ronni dijo que era 1234 

    try {
        const isValid = await bcrypt.compare(testPassword, storedHash);

        if (isValid) {
            console.log('Contraseña verificada: "1234" es correcta');
            console.log('Hash:', storedHash);
            console.log('Password:', testPassword);
        } else {
            console.log('Contraseña incorrecta');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

verifyPassword();