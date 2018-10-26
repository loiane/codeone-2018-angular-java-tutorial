package com.loiane.springrestcrud;

import com.loiane.springrestcrud.model.Contact;
import com.loiane.springrestcrud.repository.ContactRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.Duration;
import java.util.UUID;
import java.util.stream.IntStream;
import java.util.stream.LongStream;

@SpringBootApplication
public class SpringRestCrudApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringRestCrudApplication.class, args);
    }

    @Bean
    CommandLineRunner initOrder(ContactRepository repository) {
        return args -> {
            repository.deleteAll();
            LongStream.range(1, 11)
                    .mapToObj(i -> new Contact(i, "Contact " + i, "contact" + i + "@email.com", "(111) 111-1111"))
                    .map(v -> repository.save(v))
                    .forEach(System.out::println);
        };

    }
}
