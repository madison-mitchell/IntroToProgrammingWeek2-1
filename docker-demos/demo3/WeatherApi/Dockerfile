FROM mcr.microsoft.com/dotnet/sdk:6.0 as build
WORKDIR /app

COPY . ./
# Install all the nuget packages
RUN dotnet restore 

RUN dotnet publish -c Release -o out 


FROM mcr.microsoft.com/dotnet/aspnet:6.0 as final
EXPOSE 80
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "WeatherApi.dll"]