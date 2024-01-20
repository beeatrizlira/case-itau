package br.com.cadastro.service;

import br.com.cadastro.model.Pessoa;
import br.com.cadastro.model.dto.PessoaDTO;
import br.com.cadastro.service.repository.PessoaRepository;
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

    public void create(PessoaDTO request) {
        System.out.println("TESTE:");
        System.out.println(request.getNome());
        // System.out.println(request.toString());
        Pessoa pessoa = new Pessoa();
        pessoa.setCelular(request.getCelular());
        pessoa.setCpf(request.getCpf());
        pessoa.setEmail(request.getEmail());
        pessoa.setNome(request.getNome());
        pessoa.setSexo(request.getSexo());
        this.pessoaRepository.save(pessoa);
    }
}
