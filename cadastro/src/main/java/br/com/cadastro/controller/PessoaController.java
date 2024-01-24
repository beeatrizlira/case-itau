package br.com.cadastro.controller;

import br.com.cadastro.model.Pessoa;
import br.com.cadastro.model.dto.PessoaDTO;
import br.com.cadastro.service.PessoaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.ResponseStatus;
@RestController
@RequestMapping("/api/pessoas")
public class PessoaController {

    private final PessoaService pessoaService;

    public PessoaController(PessoaService pessoaService) {
        this.pessoaService = pessoaService;
    }

    @GetMapping
    public ResponseEntity<List<Pessoa>> findAll(@RequestParam(value = "cpf", required = false) String cpf) {
        if(cpf != null) {
            return ResponseEntity.ok().body(Arrays.asList(this.pessoaService.findByCpf(cpf)));
        }
        return ResponseEntity.ok(this.pessoaService.findAll());
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    @ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<Object> create(@RequestBody @Valid PessoaDTO request) {
        Pessoa response = pessoaService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
