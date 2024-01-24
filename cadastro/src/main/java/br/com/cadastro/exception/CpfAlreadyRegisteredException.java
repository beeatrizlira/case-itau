package br.com.cadastro.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class CpfAlreadyRegisteredException extends RuntimeException {
    public CpfAlreadyRegisteredException() {
        super("CPF já cadastrado");
    }
}
