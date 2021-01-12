class Author < ApplicationRecord
    has_many :proverbs, dependent: :destroy
end
