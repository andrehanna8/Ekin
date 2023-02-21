class User < ApplicationRecord
  before_validation :ensure_session_token

  validates :username, 
    uniqueness: true, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  
    validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true
  
  has_secure_password

  def self.find_by_credentials(credential, password)
    if credential.match?(URI::MailTo::EMAIL_REGEXP)
      field_to_query = :email
    else
      field_to_query = :username
    end
    
    user = User.find_by(field_to_query => credential)
    
    if user && user.authenticate(password)
      return user
    else
      return nil
    end
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end
  private
  
  def generate_unique_session_token
    loop do
      session_token = SecureRandom::urlsafe_base64
      return session_token unless User.exists?(session_token: session_token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
