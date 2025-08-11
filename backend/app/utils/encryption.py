from cryptography.fernet import Fernet
from app.config.settings import settings
import base64

# Generate a key from your secret key
def get_encryption_key():
    # Use first 32 chars of secret key, pad if necessary
    key = settings.secret_key[:32].ljust(32, '0')
    return base64.urlsafe_b64encode(key.encode())

def encrypt_text(text: str) -> str:
    """Encrypt text for secure storage."""
    f = Fernet(get_encryption_key())
    encrypted_data = f.encrypt(text.encode())
    return encrypted_data.decode()

def decrypt_text(encrypted_text: str) -> str:
    """Decrypt text for retrieval."""
    f = Fernet(get_encryption_key())
    decrypted_data = f.decrypt(encrypted_text.encode())
    return decrypted_data.decode()
