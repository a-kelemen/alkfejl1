/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.note.repositories;

import hu.elte.note.entities.Label;
import hu.elte.note.entities.NoteGroup;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author András
 */
@Repository
public interface LabelRepository extends CrudRepository<Label, Integer>{
    public Iterable<Label> findByLabelId(Integer id);
}
