package br.com.cadastro.controller;

import br.com.cadastro.error.ApiResponseException;
import br.com.cadastro.model.Pessoa;
import br.com.cadastro.model.dto.ApiResponseDTO;
import br.com.cadastro.model.dto.PessoaDTO;
import br.com.cadastro.service.PessoaService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/pessoas")
public class PessoaController {

    private final PessoaService pessoaService;

    public PessoaController(PessoaService pessoaService) {
        this.pessoaService = pessoaService;
    }

    @GetMapping
    public ResponseEntity<List<Pessoa>> buscarTodos() {
        return ResponseEntity.ok(this.pessoaService.findAll());
    }

    @GetMapping
    public ResponseEntity<Pessoa> findById(@RequestParam String cpf) {
        Pessoa response = this.pessoaService.findByCpf(cpf);
        return ResponseEntity.ok(response);
    }
    

    @PostMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<ApiResponseDTO> create(@RequestBody PessoaDTO request) {
        try {
            pessoaService.create(request);
            return ResponseEntity.ok().body(new ApiResponseDTO(HttpStatus.CREATED.toString(), "Usuário cadastrado com sucesso"));
        } catch (ApiResponseException ex) {
            return ex.getResponseEntity();
        }
    }
}
