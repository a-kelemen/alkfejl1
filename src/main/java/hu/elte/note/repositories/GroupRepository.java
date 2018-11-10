/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.note.repositories;

import org.springframework.data.repository.CrudRepository;
import hu.elte.note.entities.NoteGroup;
import org.springframework.stereotype.Repository;
import hu.elte.note.entities.User;
/**
 *
 * @author Mad
 */
@Repository
public interface GroupRepository extends CrudRepository<NoteGroup, Integer>{
    public Iterable<NoteGroup> findAllByUser(User user);
}
