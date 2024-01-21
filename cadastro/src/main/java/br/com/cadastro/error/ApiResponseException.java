package br.com.cadastro.error;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import br.com.cadastro.model.dto.ApiResponseDTO;

public class ApiResponseException extends RuntimeException {
    private final HttpStatus httpStatus;
    private final String message;
    
    public ApiResponseException(HttpStatus httpStatus, String message) {
        super(message);
        this.httpStatus = httpStatus;
        this.message = message;
    }

    public ResponseEntity<ApiResponseDTO> getResponseEntity() {
        return ResponseEntity.status(httpStatus).body(new ApiResponseDTO(httpStatus.toString(), message));
    }
}
