FROM golang:alpine3.16 as build
WORKDIR /app
COPY go.mod .
COPY *.go .
RUN go build -o ./out/oncall .


FROM alpine as final
WORKDIR /app
COPY --from=build /app/out/oncall .

EXPOSE 80
CMD ["/app/oncall"]