FROM openjdk:14-alpine
COPY build/libs/micronaut-app-*-all.jar micronaut-app.jar
EXPOSE 8080
CMD ["java", "-Dcom.sun.management.jmxremote", "-Xmx128m", "-jar", "micronaut-app.jar"]