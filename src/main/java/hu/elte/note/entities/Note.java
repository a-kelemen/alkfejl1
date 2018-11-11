/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.note.entities;

/**
 *
 * @author Mad
 */

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import java.util.List;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Note {
    
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer noteId;
    
    @Column
    @NotNull
    private String noteText;
    
    @Column
    @NotNull
    private Integer noteImportance;
    
    @Column
    @NotNull
    private boolean noteIsActual;
    
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private NoteGroup noteGroup;
    
    @ManyToMany
    @JoinTable
    private List<Label> labels;
    
}
