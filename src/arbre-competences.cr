require "kemal"

get "/" do
  render "public/index.html"
end

get "/ajout" do
  render "public/ajouter.html"
end

get "/modifier/:id" do |env|
  userId = env.params.url["id"]
  render "src/view/modifier.ecr"
end

Kemal.run

