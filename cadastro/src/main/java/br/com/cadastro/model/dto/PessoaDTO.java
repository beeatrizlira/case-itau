package br.com.cadastro.model.dto;

import java.time.LocalDate;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.Nullable;

public class PessoaDTO {
    @NotBlank
    @NotNull
    @Length(max = 200, min = 1)
    private String name;

    @NotBlank
    @NotNull
    private String gender;

    @NotNull
    @NotBlank
    @Length(min = 11, max = 11)
    private String cpf;

    @NotNull
    @NotBlank
    @Email
    @Length(max = 200)
    private String email;

    private String phone;
    
    @NotNull
    private LocalDate birth;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }


    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getBirth() {
        return birth;
    }

    public void setBirth(LocalDate birth) {
        this.birth = birth;
    }
}
    
