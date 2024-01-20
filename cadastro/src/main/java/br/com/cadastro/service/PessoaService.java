package br.com.cadastro.service;

import br.com.cadastro.model.Pessoa;
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


}
