package Service;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import br.com.cadastro.model.Pessoa;
import br.com.cadastro.model.dto.PessoaDTO;
import br.com.cadastro.repository.PessoaRepository;
import br.com.cadastro.service.PessoaService;

@ExtendWith({ SpringExtension.class })
public class PessoaServiceTest {
    @InjectMocks
    private PessoaService suite;

    @Mock
    private PessoaRepository pessoaRepository;

    @Test
    public void shouldCreateUserSucess() {
        PessoaDTO pessoa = new PessoaDTO();
        pessoa.setCpf("12345678910");
        pessoa.setPhone("11111111111");
        pessoa.setEmail("teste@teste.com");
        pessoa.setName("Beatriz");
        pessoa.setGender("F");
        when(pessoaRepository.findByCpf(pessoa.getCpf())).thenReturn(null);
        suite.create(pessoa);
        verify(pessoaRepository, times(1)).findByCpf(any());
        verify(pessoaRepository, times(1)).save(any());
    }

    @Test
    public void shouldBeNotCreateUserBecauseCpfAlreadExists() {

        Pessoa pessoa = new Pessoa();
        pessoa.setCpf("11111111111");

        PessoaDTO pessoaDTO = new PessoaDTO();
        pessoaDTO.setCpf("11111111111");
        pessoaDTO.setPhone("11111111111");
        pessoaDTO.setEmail("teste@teste.com");
        pessoaDTO.setName("Beatriz");
        pessoaDTO.setGender("F");
        when(pessoaRepository.findByCpf(pessoa.getCpf())).thenReturn(pessoa);

        try {
            suite.create(pessoaDTO);
        } catch (Exception e) {
            
        }

        verify(pessoaRepository, times(1)).findByCpf(any());
        verify(pessoaRepository, times(0)).save(any());
    }

    @Test
    public void shouldFindUserByCpfSuccess() {
        PessoaDTO pessoa = new PessoaDTO();
        pessoa.setCpf("12345678910");
        when(pessoaRepository.findByCpf(pessoa.getCpf())).thenReturn(new Pessoa());
        suite.findByCpf(pessoa.getCpf());
        verify(pessoaRepository, times(1)).findByCpf(any());
    }

    @Test
    public void shouldFindUserByCpfNotSuccess() {
        PessoaDTO pessoa = new PessoaDTO();
        pessoa.setCpf("12345678910");
        when(pessoaRepository.findByCpf(pessoa.getCpf())).thenReturn(null);
        try {
            suite.findByCpf(pessoa.getCpf());
        } catch(Exception ex) {

        }
        verify(pessoaRepository, times(1)).findByCpf(any());
    }

    @Test
    public void shouldFindAllUsersSucess() {
        List<Pessoa> listPessoas = new ArrayList<>();
        listPessoas.add(new Pessoa());
        when(pessoaRepository.findAll()).thenReturn(listPessoas);
        suite.findAll();
        verify(pessoaRepository, times(1)).findAll();
    }

    @Test
    public void shouldCreateUserError() {
        PessoaDTO pessoa = new PessoaDTO();
        pessoa.setCpf("12345678910");
        pessoa.setPhone("11111111111");
        pessoa.setEmail("teste@teste.com");
        pessoa.setName("Beatriz");
        pessoa.setGender("F");
        when(pessoaRepository.findByCpf(pessoa.getCpf())).thenReturn(null);
        doThrow(RuntimeException.class).when(pessoaRepository).save(any());
        try {
            suite.create(pessoa);
        } catch (Exception e) {
            
        }
      
        verify(pessoaRepository, times(1)).findByCpf(any());
        verify(pessoaRepository, times(1)).save(any());
    }
}
