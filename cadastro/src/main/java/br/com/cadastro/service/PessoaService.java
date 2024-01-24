package br.com.cadastro.service;
import br.com.cadastro.exception.CpfAlreadyRegisteredException;
import br.com.cadastro.exception.RecordNotFoundException;
import br.com.cadastro.model.Pessoa;
import br.com.cadastro.model.dto.PessoaDTO;
import br.com.cadastro.repository.PessoaRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

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
        Pessoa response = this.pessoaRepository.findByCpf(cpf);
        if(response == null) {
            throw new RecordNotFoundException(cpf);
        }
        return response;
    }

    @ResponseBody
    public Pessoa create(PessoaDTO request) {
        boolean cpfAlreadyRegistered = this.pessoaRepository.findByCpf(request.getCpf()) == null;
        
        if(!cpfAlreadyRegistered) {
            throw new CpfAlreadyRegisteredException();
        }

        Pessoa pessoa = new Pessoa();
        pessoa.setPhone(request.getPhone());
        pessoa.setCpf(request.getCpf());
        pessoa.setEmail(request.getEmail());
        pessoa.setName(request.getName());
        pessoa.setGender(request.getGender());
        pessoa.setBirth(request.getBirth());
        
        return this.pessoaRepository.save(pessoa);
    }
}
