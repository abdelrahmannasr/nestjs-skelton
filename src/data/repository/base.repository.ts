import { Language } from './../enum/language';
import { GetLanguage } from '../../module/shared';
import { Repository } from 'typeorm';

export class BaseRepository<T> extends Repository<T> {

    protected getCurrentLanguage(@GetLanguage() currentLanguage): Language {
        return currentLanguage;
    }
}
