class ProverbSerializer < ActiveModel::Serializer
  attributes :id, :topic, :content
  belongs_to :author
end
