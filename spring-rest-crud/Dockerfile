FROM openjdk:10-jre-slim
COPY ./target/spring-rest-crud-0.0.1-SNAPSHOT.jar /usr/src/app/
WORKDIR /usr/src/app
EXPOSE 8080
CMD ["java", "-jar", "spring-rest-crud-0.0.1-SNAPSHOT.jar"]

# docker build -t spring-rest-crud -f Dockerfile .
# docker run -p 8080:8080 spring-rest-crud
# docker-compose up

# lsof -n -i4TCP:8080
# kill -9 P
