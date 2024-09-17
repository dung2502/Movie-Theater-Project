package org.c07.movie_booking.service.implement;

import org.c07.movie_booking.dto.MovieDTO;
import org.c07.movie_booking.model.Movie;
import org.c07.movie_booking.repository.IMovieRepository;
import org.c07.movie_booking.service.IMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
public class MovieServiceImpl implements IMovieService {
    @Autowired
    private IMovieRepository movieRepository;


    @Override
    public List<MovieDTO> getFindAll() {
        List<Movie> movieEntity = movieRepository.findAll();
        List<MovieDTO> movieDTOList = new ArrayList<>();
        return movieDTOList;
    }

    @Override
    public List<Movie> getSearchField(Map<String, Objects> params) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }
}
