package com.loiane.springrestcrud.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Contact {

    @Id
    @GeneratedValue
    private Long id;

    @NotBlank
    @Size(max=200)
    private String name;

    @NotBlank
    @Size(max=100)
    private String email;

    @Size(max=30)
    private String phone;
}
