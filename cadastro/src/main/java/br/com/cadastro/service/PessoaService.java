package br.com.cadastro.service;

import br.com.cadastro.error.ApiResponseException;
import br.com.cadastro.model.Pessoa;
import br.com.cadastro.model.dto.PessoaDTO;
import br.com.cadastro.service.repository.PessoaRepository;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    private final PessoaRepository pessoaRepository;

    public PessoaService(PessoaRepository pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }

    public List<Pessoa> findAll() {
        return this.pessoaRepository.findAll();
    }

    public Pessoa findByCpf(String cpf) {
        return this.pessoaRepository.findByCpf(cpf);
    }

    public void create(PessoaDTO request) {
        boolean isNotFound = this.pessoaRepository.findByCpf(request.getCpf()) == null;

        if(!isNotFound) {
            throw new ApiResponseException(HttpStatus.PRECONDITION_FAILED, "CPF já cadastrado");
        }
        
        try {
            Pessoa pessoa = new Pessoa();
            pessoa.setCelular(request.getCelular());
            pessoa.setCpf(request.getCpf());
            pessoa.setEmail(request.getEmail());
            pessoa.setNome(request.getNome());
            pessoa.setSexo(request.getSexo());
            this.pessoaRepository.save(pessoa);
        } catch (Exception e) {
            throw new ApiResponseException(HttpStatus.BAD_REQUEST, "Falha ao criar usuário, tente novamente mais tarde");
        }
    }
}
