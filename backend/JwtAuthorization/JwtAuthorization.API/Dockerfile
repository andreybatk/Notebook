#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["JwtAuthorization.API/JwtAuthorization.API.csproj", "JwtAuthorization.API/"]
COPY ["JwtAuthorization.BL/JwtAuthorization.BL.csproj", "JwtAuthorization.BL/"]
COPY ["JwtAuthorization.DB/JwtAuthorization.DB.csproj", "JwtAuthorization.DB/"]
RUN dotnet restore "./JwtAuthorization.API/JwtAuthorization.API.csproj"
COPY . .
WORKDIR "/src/JwtAuthorization.API"
RUN dotnet build "./JwtAuthorization.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./JwtAuthorization.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "JwtAuthorization.API.dll"]