FROM node AS node-build-env

COPY . ./
WORKDIR NutriDiary.Web/ClientApp/nutri-diary
RUN npm install
RUN npm run deploy

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
WORKDIR /app

# Copy everything else and build
COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out
COPY --from=node-build-env /NutriDiary.Web/ClientApp/dist/ out/ClientApp/dist


# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "NutriDiary.Web.dll"]