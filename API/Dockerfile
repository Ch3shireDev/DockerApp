# #Initialize database
# FROM mcr.microsoft.com/mssql/server AS db
# ENV SA_PASSWORD=MyPassword123
# ENV ACCEPT_EULA=Y

# EXPOSE 1433

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore
# RUN dotnet clean

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "./API.dll"]
EXPOSE 80

