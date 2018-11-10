/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.note.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import hu.elte.note.entities.User;
import java.util.Optional;

/**
 *
 * @author Mad
 */
@Repository
public interface UserRepository extends CrudRepository<User, Integer>{
    Optional<User> findByUsername(String username);
}
